const path = require('path')

module.exports = {
    entry:{
        path: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            
                test:/\.(png|woff|woff2|svg|ttf|eot)$/,
                //这里采用url-loader,是因为其比较file-loader，更不用考虑路径问题
                use:{
                     loader:'url-loader',
                     options: {
                         limit: 100000,  //这里要足够大这样所有的字体图标都会打包到css中
                     }
             
        }}]
}}