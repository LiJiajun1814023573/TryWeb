//参考掘金,csdn等资料,实现并理解了promise
class My{
    static PENDING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(executor){
        this.status = My.PENDING
        this.value = null
        this.callbacks = []
        try {
        executor(this.resolve.bind(this),this.reject.bind(this))
        //注意绑定this,否则this指向window
        } catch (err){
            this.reject(error)
            //出现错误一并捕获,并执行reject,设置状态为拒绝并改动值
        }
    }
    resolve(value){
        //防止状态重复改动
        if(this.status = My.PENDING){
            this.status = My.FUFILLED
            this.value = value
            //模拟该段代码的执行为异步任务
            setTimeout(()=>{
                this.callbacks.map(callback=>{
                callback.onFulfilled(value);
                })
            })
        }
    }
    reject(reason){
        if(this.status = My.PENDING){
            this.status = My.REJECTED
            this.value = reason
            setTimeout(()=>{
                this.callbacks.map(callback=>{
                callback.onRejected(reason)
                })
            })
        }
    }
    then(onFulfilled, onRejected) {
        //解决传入参数可能是空或者不为函数的问题
        if(typeof onFulfilled !== "function"){
            onFulfilled = ()=> this.value;//实现then的穿透问题(当then不传任何参数时候)
        }
        if(typeof onRejected !== "function"){
            onRejected = ()=>this.value;
        }
        //then返回对象不能是其本身
        let promise = new My((resolve,reject)=>{
             //异步执行的状态改变可能将在then开始执行之后执行.
             if (this.status = My.PENDING){
                this.callbacks.push({
                    //统一准备状态发生错误的处理
                    onFulfilled:value=>{
                        this.parse(promise,onFulfilled(value),resolve,reject)
                    // try{
                    //     let result = onFulfilled(value)
                    //     if(result instanceof My){
                    //         result.then(resolve,reject)
                    //     } else {
                    //     resolve(result)
                    //     }
                    // } catch (error){
                    //     reject(error)
                    // }
                    },
                    onRejected:value=>{
                        this.parse(promise,onRejected(value),resolve,reject)
                    // try{
                    //     let result = onRejected(value)
                    //     if(result instanceof My){
                    //         result.then(resolve,reject)
                    //     } else {
                    //     resolve(result)
                    //     } 
                    // } catch(error){
                    //     reject(error)
                    // }
                    }
                })
            }
        //满足状态时执行
         if(this.status === My.FUFILLED){
            //将在执行函数时出现错误捕获并改变状态
            //设置定时器函数模拟异步执行
                setTimeout(()=>{
                    this.parse(promise,onFulfilled(this.value),resolve,reject)
        //         try{
        //             let result = onFulfilled(this.value)
        //             //返回值作为值传递给下一个then,并且改变状态
        //             if(result instanceof My){
        //                 result.then(resolve,reject)
        //             } else {
        //             resolve(result)
        //             }
        //      } catch (error){
        //             reject(error)
        //         }
            })
        }
        if(this.status === My.REJECTED){
            setTimeout(()=>{
                this.parse(promise,onRejected(this.value),resolve,reject)
            //     try{
            //        let result = onRejected(this.value)
            //        if(result instanceof My){
            //         result.then(resolve,reject)
            //     } else {
            //         resolve(result)
            //        }
            //     } catch (error){
            //         reject(error)
            //      }  
            // })
        // }
            })
        }
    });
}
    
    parse(promise,result,resolve,reject) {
        if(promise === result){
            //返回值类型约束
            throw new TypeError("Chaining cycle detected")
        }
        try{
            //返回值作为值传递给下一个then,并且改变状态
            if(result instanceof My){
                result.then(resolve,reject)
            } else {
            resolve(result)
            }
     } catch (error){
            reject(error)
        }
    }
    //实现resolve
    static resolve (value){
        return new My((resolve,reject)=>{
            if(value instanceof My){
                value.then(resolve,reject)
            }else {
            resolve(value)
            }
        });
    }
    //实现reject
    static reject(value){
        return new My((resolve,reject)=>{
            reject(value)
        })
    }
    //实现all
    static all(promises){
        const values = [];
        return new My((resolve,reject)=>{
        promises.forEach((promise)=>{
            promise.then(
                value =>{
                    resolves.push(value)
                    if (values.length === promises.length){
                        resolve(values)
                    }
                }
                ,reason =>{
                  reject(reason)
            })
        })
     })
    }
    static race(promises){
        return new My((resolve,reject)=>{
            promises.map(promise=>{
                promise.then(value=>{
                    resolve(value)
                },reason=>{
                    reject(reason)
                })
            })
        })
    }
    }
}
    

