//header部分
//三横线动画
let threelink = document.querySelector('.app_nav_taglink')
let three = document.querySelectorAll('.app_nav_taglink div')
let flag1 = 0
threelink.addEventListener('click',function(){
    if (flag1 === 0 ) {
        //注意啊! className里的类名不需要加.
        //被这个坑了好长时间....
        three[0].className='app_nav_taglink_'
        three[2].className='app_nav_taglink_'
        flag1 = 1
    } else {
        three[0].className='app_three_first'
        three[2].className='app_three_third'
        flag1 = 0
    }
})
//点击用户图标动画

let user = document.querySelector('.app_header_userlink');
let userinformation = document.querySelector('.app_header_userinformation');
let flag2 = 0;
user.addEventListener('click',function(){
    if (flag2 === 0 ) {
        userinformation.className='app_header_userinform'
        flag2 = 1
    } else {
       userinformation.className ='app_header_userinformation'
        flag2= 0
    }
})

//main部分
//轮播图
//1.图片切换和按钮点击效果以及改变文字内容
let app_watchnow = document.querySelector('.app_watchnow')
let images = app_watchnow.children
let p = document.querySelector('.app_footer_p')

let buttons= document.querySelectorAll('.app_section_button3');

   buttons[0].addEventListener('click', function(){    
           images[0].className='app_watchnow_div1 app_watchnow_firststatus';
           images[1].className='app_watchnow_div2 app_watchnow_firststatus';
           images[2].className='app_watchnow_div3 app_watchnow_firststatus';     
           for(var i = 0;i <=2;i++){
            buttons[i].className='app_section_button3';
        }
        buttons[0].className='app_button3_yellow';
        p.innerHTML='RED DEAD ONLINE:MOONSHINERS';
    })
    buttons[1].addEventListener('click', function(){
        images[0].className='app_watchnow_div1 app_watchnow_secondstatus';
        images[1].className='app_watchnow_div2 app_watchnow_secondstatus';
        images[2].className='app_watchnow_div3 app_watchnow_secondstatus';       
        for(var i = 0;i <=2;i++){
            buttons[i].className='app_section_button3';
        }
        buttons[1].className='app_button3_yellow';
        p.innerHTML='GRAND THEFT AUTO ONLINE:THE DIAMOND CASINO HEIST';
    })
    buttons[2].addEventListener('click', function(){
        images[0].className='app_watchnow_div1 app_watchnow_thirdstatus';
        images[1].className='app_watchnow_div2 app_watchnow_thirdstatus';
        images[2].className='app_watchnow_div3 app_watchnow_thirdstatus';
        for(var i = 0;i <=2;i++){
            buttons[i].className='app_section_button3';
        }
        buttons[2].className='app_button3_yellow';
        p.innerHTML='RED DEAD REDEMPTION 2:PC LAUNCH TRAILER';
    })
