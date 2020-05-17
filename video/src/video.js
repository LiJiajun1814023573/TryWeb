import eventEmitter from './eventEmitter'
//这里由于export没加default导致报错　,constructor is not a function
//原因是export输出一个对象时，import导入时需要加{},export defalut本身默认输出一个对象，import导入不需要加{}
//另外export default 不能先定义在输出
//export输出对象可以用大括号表示集合，然后import导入时选择需要的部分导入即可，一般是同名．也可以选择as防止暴露,import时采用as后面的命名导入即可
//以上是ES6 Module规范规定的
//可见https://www.jianshu.com/p/65099c4d597b



/**
 * @class video类，包含dom属性以及emitter,便于统一管理，定义了video相关的各种动作行为
 */
export class Video {
    /**
     * @constructor
     * @param {object} init 初始化video的默认配置，详情请查看md文档 
     */
    constructor(init){
        this.dom = document.createElement('video')
        this.dom.setAttribute("id","vd_video")
        this.dom.src = init['source'] 
        // this.dom.controls = 'controls'
        if(init['width'])
        this.dom.setAttribute("width", init['width'])
        else
        this.dom.setAttribute("width", "820")
        if(init['height'])
        this.dom.setAttribute("height", init['height'])
        else
        this.dom.setAttribute("height", "460")
        if(init['volume'])
        this.dom.setAttribute("volume",init['volume'])
        else
        this.dom.setAttribute("volume","0.5")
        
        document.getElementById('vd_player').appendChild(this.dom,document.getElementById('canvas'))
        this.event = new eventEmitter()
    } 
    subscribe(event,listener){
        this.event.subscribe(event,listener)
    }
    publish(event,args){
        this.event.publish(event,args)
    }
    /**
     * @description 播放
     */
    play(){
        this.dom.play()
    }
    /**
     * @description 暂停
     */
    pause(){    
        this.dom.pause()
    }
    /**
     * @description 得到音量
     */
    getVolume(){
        return this.dom.volume
    }
    /**
     * @description 设置音量
     * @param {number} num
     */
    setVolume(num){
        if(num>=1) this.dom.volume = 1
        else if(num<0) this.dom.volume = 0
        else this.dom.volume = num 
    }
    /**
     * @description 得到当前视频时间
     */
    getCurrentTime(){
        return this.dom.currentTime
    }
    /**
     * @description 设置当前视频进度时间 
     * @param {number} num
     */
    setCurrentTime(num){
        if(num<=0) num=0
        else if(num>this.dom.duration) num = this.dom.duration
        else this.dom.currentTime = num
    }
    /**
     * @description 得到当前时间占总时间的百分比
     */
    getPercent(){
        let {currentTime,duration} = this.dom
        return(`${Math.floor(currentTime/duration*100)}%`)
        // return `${currentTime/duration*100}%`
    }
    /**
     * @description 设置播放器进度条宽度
     * @param {number} num  
     */
    setProgress(num){
        // let vd_progress = document.getElementById('vd_progress')
        //这里用setAttribute会导致进度条无法移动（未知原因）
        document.getElementById('vd_progress').style.width = num
    }
    /**
     * @description 设置播放器全屏
     */
    fullScreen(){
        this.dom.requestFullscreen()
    }
    // cancelFullScreen(){
    //     this.dom.webkitExitFullscreen()
    // }
    /**
     * @description 选择倍速
     */
    selectRate(value){
        this.dom.playbackRate = value
    }
}