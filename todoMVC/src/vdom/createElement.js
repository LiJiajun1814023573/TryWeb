const vnode = (tags,props,key,event,children,text)=>{
    return {
        tags,
        props,
        key,
        event,
        children,
        text
    }
}
function createElement (tags,props={},...children){
    //获取属性的key值，然后删掉
    let key,event
    if(props.key){
        key = props.key
        delete props.key
    }
    //获取属性的事件，然后删掉
    if(props.event){
        event = props.event
        delete props.event
    }
    //判断子节点是标签还是文本
    //这里因为没把children赋值导致．．．浪费很多时间
    children =  children.map(child=>{
        if(typeof (child) == 'string'){
            return vnode(undefined,undefined,undefined,undefined,undefined,child)
        } else {
            return child
        }
    })
    return vnode(tags,props,key,event,children)
    // this.tag = tag
    // this.props = props
    // this.children = children
}
const createDomElementVnode = (vnode)=>{
    let {
        tags,
        props,
        key,
        event,
        children,
        text
    } = vnode
    if(tags) {
        vnode.domElement = document.createElement(tags)
        //根据我们虚拟节点的属性，更新真实dom
        updateProps(vnode)
        updateEvent(vnode)
        //递归调用渲染
        if(children)
            Array.from(children).forEach(childNode=>render(childNode,vnode.domElement))
    } else {
        vnode.domElement = document.createTextNode(text)
        console.log(vnode.domElement)
    }
    return vnode.domElement
}
const render= (vnode,container)=>{
    let ele = createDomElementVnode(vnode)
    container.appendChild(ele)
}
export {createElement,createDomElementVnode,render}