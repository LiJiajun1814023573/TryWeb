/**
 * 在combineReducers内部返回的函数，在触发action之后，由dispatch方法调用该函数，reducer负责调用
 * 不同的reducer,并且结果将会被放在一个state树当中返回．
 * @param {Array} reducers-不同reduce的集合
 * @return {Function}-返回一个reducer函数
 */

let combineReducers = (...reducers)=>{
    /** 
     * reducer函数目的是返回一个state状态
     * @param {Object} State-当前状态
     * @param {Object} action-传入的action
     * @param {Array} reducers-reduce数组
     * @return {Object}-返回一个state状态
    */
    return reducer= (state = {},action)=>{
        let result = {}
        for (key in reducers ){
            result[key] = reducers[key](state.key,action)
        }
        return result
    }
}
class Store{
    /**
     * １．构造器函数
     * @param {Function} reducer 
     * @param {Object} initState 
     */
    constructor(reducer,initState){
        this.reducer = reducer
        this.State = initState
        this.listeners = []
    }
    
    /**
     * ２．获取状态
     * @return {Object} 当前状态
    */
    getState(){
        return this.State
    }


    /**
     * ３．更新状态，若发生变化执行变化监听器函数
     * @param {Object} action 动作 
     */
    dispatch(action){
        this.State = this.reducer(this.State,action)
        this.listeners.forEach(handler=>
            handler())
    }

    /**
     * ４．添加变化监听器
     * @param {Function} handler-订阅变化监听器
     */
    subscribe(handler){
        this.listeners.push(handler)
    }
    
    /**
     * ５．替换根reducer
     * @param {Function} newReducer-新的根reduce处理函数 
     */
    replaceReducer(newReducer){
        this.reducer = newReducer
    }
}

class Redux {
    //创建store,保存state,reducer等信息
    createStore(reducer){
        return new Store(reducer,reducer(undefined,{}))
    }
}
const uniqueRedux = new Redux

