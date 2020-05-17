import {Video} from './video'
import './1.css'
import CanvasBarrage from './canvas'
const message = {
        source:'./1.mp4'
}
let doc = document
let video = new Video(message)
let vd_player = doc.getElementById('vd_player')
let vd_play = doc.getElementById('vd_play')
let vd_pause = doc.getElementById('vd_pause')
let container = doc.getElementById('container')
// let vd_progress = document.getElementById('vd_progress')
let vd_full = doc.getElementById('vd_full')
// let vd_nfull = document.getElementById('vd_nfull')
let vd_selectRate = doc.getElementById('vd_selectRate')

/**
 * @description 为订阅不同事件注册各种listeners
 */
video.subscribe('play',()=>{
        video.play()
})
video.subscribe('pause',()=>{
        video.pause()
})
video.subscribe('change',(e)=>{
        switch(e.keyCode){
                case 37:
                        video.setCurrentTime(video.getCurrentTime()-5)
                        break;
                case 38:
                        video.setVolume(video.getVolume()+0.1)
                        break;
                case 40:
                        video.setVolume(video.getVolume()-0.1)
                        break;
                case 39:
                        video.setCurrentTime(video.getCurrentTime()+5)
                        break;       
                }
})
video.subscribe('setProgress',(num)=>{
        video.setProgress(num)
})
video.subscribe('fullScreen',()=>{
        video.fullScreen()
})
// video.subscribe('cancelFullScreen',()=>{
//         video.cancelFullScreen()
// })
video.subscribe('selectRate',(value)=>{
        video.selectRate(value)
})
/**
 * @description 为元素加监听器，监听事件发生，在不同事件发生时，publish绑定好的函数
 */
vd_play.addEventListener('click',()=>{
        video.publish('play')
})
vd_pause.addEventListener('click',()=>{
        video.publish('pause')
})
video.dom.addEventListener('keyup',e=>{
        video.publish('change',e)
})
video.dom.addEventListener('timeupdate',()=>{
        let a = video.getPercent()
        video.publish('setProgress',a)
})
container.addEventListener('click',(e)=>{
        let start = container.getBoundingClientRect().left
        let end = e.pageX
        let a = (end-start)/container.offsetWidth
        video.dom.currentTime = a * video.dom.duration
        video.publish('play')
})
vd_full.addEventListener('click',()=>{
        video.publish('fullScreen')
})
// vd_nfull.addEventListener('click',()=>{
//         video.publish('cancelFullScreen')
// })
vd_selectRate.addEventListener('click',()=>{
        video.publish('selectRate',vd_selectRate.value)
})


let data = [
        {value: '太好听了', time: 5, color: 'red', speed: 1, fontSize: 30},
        {value: '我爱班长', time: 10, color: 'green', speed: 1.5, fontSize: 26},
        {value: '好听', time: 15},
]
let canvas = doc.getElementById('canvas');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

//初始化弹幕画布信息
let canvasBarrage = new CanvasBarrage(canvas, video.dom, { data });

//play即让弹幕渲染开始
video.dom.addEventListener('play', () => {
    canvasBarrage.isPaused = false;
    canvasBarrage.render(); 
});
//pause即让弹幕渲染停止
video.dom.addEventListener('pause', () => {
        // isPaused设为true表示暂停播放
        canvasBarrage.isPaused = true;
});
//手动发送弹幕
let send = ()=>{
        let value = $txt.value; 
        let time = video.dom.currentTime; 
        let color = $color.value;   
        let fontSize = $range.value;
        let obj = { value, time, color, fontSize };
        canvasBarrage.add(obj);
        $txt.value = ''; 
 }
// 两种激发发送弹幕动作的方法
$btn.addEventListener('click', send);
$txt.addEventListener('keyup', e => {
        let key = e.keyCode;
        key === 13 && send();
});



    