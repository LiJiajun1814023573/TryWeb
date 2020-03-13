const fetch = require('node-fetch')
const fs = require('fs')
const https = require('https')

let p = (message,i) => {
    //首先借助api抓取到目标头像url
    
    //为满足需求,message部分简化了,该处采取默认方式检索关键词,如有特殊要求,
    //参见官方文档Searching for repositories模块,基于更多方面来检索,这个不算重要.
    //实现按stars排序功能
    return fetch ('https://api.github.com/search/repositories?q='+message+'&sort=stars&order=desc')
    .then (data => data.json())   
    .then (data => {
        let url = data['items'][i]['owner']['avatar_url']
        console.log('找到目标头像url:'+url)
        return url
    })
}
    //抓取到url之后,借助https模块,将url指定数据转换为binary二进制,并下载到本地(借助fs模块写文件操作)
const get_avater = (message,num) => {
    ps = []
    for (let i = 0; i < num; i++){
    ps.push(p(message,i));
    }
    Promise.all(ps).then ( urls => {
        //注意不能用var声明!var会带来变量提升,最后取任务队列中的任务于主线程中依次执行时,引用的i的值已经变成3,最后只会打印出3.jpg
        //而let创建块级作用域,执行代码时根据作用域链在父级AO即函数活动对象中寻找变量值,每个i是不一样的
        for(let i = 0; i < urls.length; i++){
            https.get(urls[i],req => {
                var theimg = ''
                req.setEncoding('binary')
                req.on('data',function (every) {
                    theimg += every;
                })
                req.on('end',function () {
                    fs.writeFile('./'+message+i+'.jpg',theimg,'binary',function (err) {
                        console.log('保存图片成功并已经放在'+'github'+'/'+urls[i]+'.jpg')
                    })
                })
            })
            }
    })
    .catch(error=>console.log(error))
}
//选择关键信息和需要search以及get的数量
get_avater('web',3)