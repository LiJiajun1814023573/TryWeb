export default class eventEmitter {
    constructor(){
        //handlers(map),存储事件与回调的对应
        this.handlers = {}
    }
    /**
     * 订阅事件监听器
     * @param {String} type-事件名 
     * @param {Function} callback-函数名
     */
    subscribe(type,callback) {
        //检车目标事件有无对应的监听函数队列
        if( !this.handlers[type]){
            this.handlers[type] = []
        }
        //相应的事件中push回调函数
        this.handlers[type].push(callback)
    }

    //订阅单次监听器
    subscribeOnce (type,callback) {
        const wrapper = (...args) =>{
            callback.apply(...args)
            this.unsubsribe(type,wrapper)
        }
        this.subscribe(eventName,wrapper)
    }
    /**
     * 发布事件
     * @param {String} type
     * @param {*} args
     */
    publish(type,...args) {
        if( this.handlers[type]){
            this.handlers[type].forEach((cb)=>{
                cb(...args)
            })
        }
    }
    /**
     * 取消事件订阅
     * @param {String} type
     * @param {Function} callback
     */
    unsubsribe(type,callback) {
        const callbacks = this.handlers[type]
        const index = callbacks.indexof(callback)
        if (index !== -1){
            callbacks.splice(index,1)
        }
    }
    /** 
     * 事件订阅全部取消
     */
    subsribeAll(type) {
        this.handlers[type].length = 0
    }
}
