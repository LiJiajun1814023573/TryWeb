function createElement (tag,props,children){
    this.tag = tag
    this.props = props
    this.children = children
}

createElement.prototype.render = function(){
    let el = document.createElement(this.tag);
    for(let key in this.props){
        el.setAttribute(key,this.props[key])
    }
    if(this.children){
        this.children.forEach(child => {
            child = (child instanceof createElement) ?child.render():  document.createTextNode(child)
            el.appendChild(child)
        });
    }
    return el
}
// module.exports= (tag,props,children) => new createElement(tag,props,children)


//虽然简单，但应当清楚:
//createElement函数不能使用箭头函数定义，这是箭头函数的this指向导致，需要额外关注这一点。
//而在箭头函数内部调用构造函数，则不影响构造函数内部this的指向在new实例化对象过程中的改变。