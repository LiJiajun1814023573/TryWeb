/**
 * Barrage类，通过它来实例化每个弹幕元素
 * @class 
 */
class Barrage {
    /**
     * @constructor-Barrage类的构造函数
     * @param obj -单个弹幕
     * @param ctx -实例化的弹幕画布主体 
     */
    constructor(obj, ctx) {
        /** 
         * @description 获得弹幕内容.弹幕的时间
         * 
        */
        this.value = obj.value; 
        this.time = obj.time;
        /**
         * @description 将弹幕和画布挂在this上
         *  */   
        this.obj = obj;
        this.context = ctx;
    }
    /**
     * @description 初始化弹幕
     */
    init() {
        //如果弹幕数据，即传入的data中没有设置以下属性，则采用默认设置
        this.color = this.obj.color || this.context.color;
        this.speed = this.obj.speed || this.context.speed;
        this.opacity = this.obj.opacity || this.context.opacity;
        this.fontSize = this.obj.fontSize || this.context.fontSize;
        
        //通过添加删除元素拿到弹幕的宽度
        let p = document.createElement('p');
        p.style.fontSize = this.fontSize + 'px';
        p.innerHTML = this.value;
        document.body.appendChild(p);
        this.width = p.clientWidth;
        document.body.removeChild(p);
        
        //设置弹幕出现的位置,表示为随机展示
        this.x = this.context.canvas.width;
        this.y = this.context.canvas.height * Math.random();
        //对越界进行处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize;
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize;
        }
    }
    /**
     * @description 初始化信息后，可以具有对单个弹幕进行渲染的能力
     */
    render() {
        // 设置画布文字的字号和字体
        this.context.ctx.font = `${this.fontSize}px Arial`;
        // 设置画布文字颜色
        this.context.ctx.fillStyle = this.color;
        // 绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y);
    }
}


/**
 * @class CanvasBarrage 弹幕画布类
 * 用来对整个画布中的弹幕进行控制渲染处理
 */
export default class CanvasBarrage {
    /**
     * @constructor　构建画布的基本信息，以及渲染弹幕需要的配置
     * @param {object}canvas 画布对象
     * @param {object}video 视频对象
     * @param {object}opts 初始化时传入的数据配置，默认为{}
     */
    constructor(canvas, video, opts = {}) { 
        this.video = video
        this.canvas = canvas
        //设置画布大小
        this.canvas.width = video.width
        this.canvas.height = video.height
        //得到画布
        this.ctx = canvas.getContext('2d')
        
        // 设置默认参数
        /**
         * @type {Array}data 弹幕数组,由opts合并
         */
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        // 合并对象，得到各种配置好的属性,opts可以
        Object.assign(this, defOpts, opts)
       
       //播放状态
       this.isPaused = true;
       //所有的弹幕
       this.barrages = this.data.map(item => new Barrage(item, this));
       // 渲染
       this.render();
       console.log(this);
    }
    /**
     * @description 渲染弹幕，判断状态递归渲染
     * 渲染弹幕分为三步：1.清空（防止弹幕出界仍在弹幕画布上），2.渲染当前状态整个画布需要渲染的所有弹幕（依次渲染单个弹幕）
     * 3.递归渲染,重复该过程
     */
    render() {
        this.clear();
        this.renderBarrage();
        if (this.isPaused === false) {
            requestAnimationFrame(this.render.bind(this));
        }
    }
    /**
     * @description 清除整个画布
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * @description 真正的渲染弹幕，包含了对单一弹幕的状态判断和处理
     */
    renderBarrage() {
        let time = this.video.currentTime;
        this.barrages.forEach(barrage => {
            if (!barrage.flag && time >= barrage.time) {
                if (!barrage.isInit) {
                    barrage.init();
                    barrage.isInit = true;
                }
                // x-spead得到下一个状态时该弹幕的位置，进行渲染
                barrage.x -= barrage.speed;
                barrage.render(); 
                
                //渲染结束的条件就是弹幕超出了屏幕区
                if (barrage.x < -barrage.width) {
                    barrage.flag = true; // 把flag设为true下次就不再渲染
                }
            }
        })
    }
        add(obj) {
            //添加单个弹幕
            this.barrages.push(new Barrage(obj, this));
        }
    }


