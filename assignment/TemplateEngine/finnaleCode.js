var TemplateEngine = (html,options)=>{
    var re = /<%([^%>]+)?%>/g,
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, 
    code = 'var r=[];\n', 
    cursor = 0,
    match;
    var add = (line,js)=>{
        js?(code +=line.match(reExp)?line+'\n':'r.push('+line+');\n')
            :(code += line !=''?'r.push("'+line.replace(/"/g,'\\"')+'");\n':'')
    }
    while(match = re.exec(html)){
        add(html.slice(cursor,match.index))
        add(match[1],true)
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor,html.length-cursor))
    code += 'return r.join("");'
    return new Function(code.replace(/[\r\t\n]/g,'')).apply(options)
}

//思路如下：
//采用一个数组保存模板渲染后的结果对象，然后转换为字符串输出
//利用reExp.property.exec来获取匹配字符串的相关信息并加以利用
//利用match[0]获得原始匹配部分，再用length属性获得长度，以便下一次确定code添加字符串的起始位置
//利用match[1]真正获得变量过滤包装后的内容，下面简称为变量。
//因此变量放在数组，而判断，条件语句等则不需要放在数组中,而它们无须双引号。
//从模板添加到code的内容主要有两种，分别是变量与条件语句，因此加以不同的方式进匹配行添加到代码code中,
//加上需要其余部分需要带双引号的再添加，共三种匹配添加。
//前两种与第三种通过是否为js代码进行区分，前两种之间通过正则匹配来区分匹配，再添加到code中；
//采用this.property可以实现实时绑定数据对象的作用，而代替了直接采用数据对象中的属性索引替换模板的过程。
//最后利用new Function执行函数体，改变this指向为options对象.