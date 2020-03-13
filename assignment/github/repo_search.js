const fetch = require('node-fetch')
const fs = require('fs')
const https = require('https')
//捕获到第i个头像的url,并以promise的方式返回
let p = function (message,i){
    //首先借助api抓取到目标头像url
    
    //为满足需求,message部分简化了,该处采取默认方式检索关键词,如有特殊要求,
    //参见官方文档Searching for repositories模块,基于更多方面来检索,这个不算重要.
    //实现按stars排序
    fetch ('https://api.github.com/search/repositories?q='+message+'&sort=stars&order=desc')
    .then (data => data.json())   
    .then (data => {
            let url = data['items'][i]['owner']['avatar_url']
            return url
    })
}
let repo_search = function(message,number){
    //抓取到url之后,借助https模块,将url指定数据转换为binary二进制,并下载到本地(借助fs模块写文件操作)
    //封装多个promise为promises
    ps = []
    for (let i = 0; i < number; i++){
        ps.push(p(message,i))
    }
    Promise.all(ps).then (urls => {
        for (let i = 0; i < urls.length; i++){
        https.get(urls,(req,res) => {
            var theimg = '';
            req.setEncoding('binary');
            req.on('data',function (every) {
                theimg += every;
            })
            req.on('end',function () {
                fs.writeFile(path,theimg,'binary',function (err) {
                    console.log('保存图片成功并已经放在'+'github'+'./'+url+'.jpg')
                })
            })
        })
        }
    })

    .catch (err =>
        console.log(err)
    )
}


repo_search('js',3);