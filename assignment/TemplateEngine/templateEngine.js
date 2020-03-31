//摘自掘金https://juejin.im/post/59663eaa6fb9a06ba73d4c35
// 二十行代码实现模板引擎



// //简单版
var TemplateEngine = (tpl,data)=>{
    var re = /<%([^%>]+)?%>/g,match
    while(match = re.exec(tpl)){
        tpl = tpl.replace(match[0],data[match[1]])
    }
}

//处理A.property时存在问题，如果直接渲染模板，【“A.property”】的值应为undefined，
//这段代码应该当成javascript代码从而直接执行

var TemplateEngine = (tpl,data)=>{
    var re = /<%([^%>]+)?%>/g,
    code = 'var r = [];\n',
    cursor = 0,
    match;
    var add = line => {
        code += 'r.push("'+line.replace(/"/g,'\\"')+'");\n';
    }
    while(match = re.exec(tpl)){
        add(tpl.slice(cursor,match.index))
        add(match[1])
        cursor = match.inde + match[0].length
    }
    add(tpl.substr(cursor,tpl.length-cursor))
    code += 'return r.join("");'
    console.log(code)
    return tpl
} 
//模板引擎中this.property不应该被双引号扩起，因此
//add函数与匹配循环add添加部分 改进为
var add = (line,js)=>{
    js?code +='r.push('+line+');\n':
    code += 'r.push("'+line.replace(/"/g,'\\"')+'");\n' 
}
while(match = re.exec(tpl)){
    add(tpl.slice(cursor,match.index))
    add(match[1],true)
    cursor = match.index + match[0].length
}
//同时又要判断for,if,else等关键字那么又要进行相应修改
//对add添加代码中匹配逻辑的部分进行修改
var re = /<%([^%>]+)?%>/g,
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = 'var r=[];\n',
    cursor = 0;
var add = (line,js)=>{
    js? code += line.match(reExp)?line+'\n':'r.push('+line+');\n':
        code += 'r.push("'+line.replace(/"/g,'\\"')+'");\n'
}

