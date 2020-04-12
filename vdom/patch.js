const patch=(oldVnode,newVnode)=>{   
    //判断类型不同
    if(oldVnode.tags&&oldVnode.tags!=newVnode.tags){
        return oldVnode.domElement.parentNode.replaceChild(
            createDomElementVnode(newVnode),
            oldVnode.domElement
        )
    }
    //类型相同，换文本
    if(oldVnode.text){
        if(oldVnode.text == newVnode.text) return
        return oldVnode.domElement.textContent = newVnode.text
    }
    let domElement = newVnode.domElement = oldVnode.domElement
    updateProps(newVnode,oldVnode.props)
    //对比儿子
    //1.旧的有儿子，新的有儿子
    //2.旧的有儿子　新的无儿子
    //3.新增儿子
    let oldChildren = oldVnode.children
    let newChildren = newVnode.children

    if(oldChildren.length>0 && newChildren.length>0){
        //1.
        updateChildren(domElement,oldChildren,newChildren)
    }else if(oldChildren.length>0){
        domElement.innerHTML = ''
    }else if (newChildren.length>0){
        //新增儿子，转成dom转进去
        for(let i = 0; i < newChildren.length; i++){
            domElement.appendChild(createDomElementVnode(newChildren[i]))
        }
    }
}
//新旧属性的对比
const updateProps = (newVnode,oldProps={})=>{
    let domElement = newVnode.domElement//真实dom
    let newProps = newVnode.props//当前节点中的属性
    //新旧作对比
    //1.旧的有，新的没有，属性直接删除
    for(let oldPropname in oldProps){
        if(!newProps[oldPropname]){
            delete domElement[oldPropname]
        }
    }
    //2.旧的没有，新的有
    for(let newPropsName in newProps){
        domElement[newPropsName] = newProps[newPropsName]
    }
    //3.style
    let newStyleObj = newProps.style||{}
    let oldStyleObj = oldProps.style||{}
    for(let propName in oldStyleObj){
        if(!newStyleObj[propName]){
            domElement.style[propName] = '' 
        }
    }
    //循环属性给dom
    for(let newPropsName in newProps){
        //如果有style
        if(newPropsName == 'style'){
            let styleObj = newProps.style
            for(let s in styleObj){
                domElement.style[s] = styleObj[s]
            }
        } else {
            domElement[newPropsName] = newProps[newPropsName]
        }
    }
}


const isSameVnode = (oldVnode,newVnode)=>{
    return oldVnode.key === newVnode.key && oldVnode.tags === newVnode.tags 
}
//创建映射表{a:0,b:1,c:3}
const keyMapByIndex = oldChildren =>{
    let map = {}
    for(let i = 0; i<oldChildren.length;i++){
        let current = oldChildren[i]
        if(current.key){
            map[current.key] = i
        }
    }
    return map
}
const updateChildren = (parent,oldChildren,newChildren)=>{

    let oldStartIndex = 0
    let oldStartVnode = oldChildren[0]
    let oldEndIndex = oldChildren.length - 1
    let oldEndVnode = oldChildren[oldEndIndex]
    
    let newStartIndex = 0
    let newStartVnode = newChildren[0]
    let newEndIndex = newChildren.length - 1
    let newEndVnode = newChildren[newEndIndex]
    //判断旧孩子和新孩子，循环的时候，谁先结束就停止
    while(oldStartIndex <= oldEndIndex && newStartIndex <=newEndIndex){
        if(!oldStartVnode){
            oldStartVnode = oldChildren[++oldStartIndex]
        } else if(!oldEndVnode){                    
            oldEndVnode = oldChildren[--oldEndIndex]
        } 
        //如果标签和key相同接着往下走
        if(isSameVnode(oldStartVnode,newStartVnode)){
            console.log('首指针相同')
            //标签相同．比较属性
            patch(oldStartVnode,newStartVnode)
            //如果他们两个一样，往后走
            oldStartVnode = oldChildren[++oldStartIndex]
            newStartVnode = newChildren[++newStartIndex]
        } else if(isSameVnode(oldEndVnode,newEndVnode)){
            console.log('旧尾指针与新尾指针相同')
            patch(oldEndVnode,newEndVnode)
            oldEndVnode = oldChildren[--oldEndIndex]
            newEndVnode = newChildren[--newEndIndex]
        } else if(isSameVnode(oldStartVnode,newEndVnode)){
            console.log('旧首指针与新尾指针相同')
            patch(oldStartVnode,newEndVnode)
            parent.insertBefore(oldStartVnode.domElement,oldEndVnode.domElement.nextSibling)
            //nextSibling．．．拼错了被坑的好惨
            oldStartVnode = oldChildren[++oldStartIndex]
            newEndVnode =newChildren[--newEndIndex]
        } else if(isSameVnode(oldEndIndex,newStartIndex)){
            console.log('旧尾部指针与新首指针相同')
            patch(oldEndVnode,newStartVnode)
            parent.insertBefore(oldEndVnode.domElement,oldStartVnode.domElement)
            oldEndVnode = oldChildren[--oldEndIndex]
            newStartVnode =newChildren[++newStartIndex]
        } else {
            //暴力对比
            let index = map[newStartVnode.key]
            if(index == null){
                parent.insertBefore(createDomElementVnode(newStartVnode),oldStartVnode.domElement)
            } else {
                let toMoveNode = oldChildren[index]
                patch(toMoveNode,newStartVnode)
                parent.insertBefore(toMoveNode.domElement,oldStartVnode.domElement)
                oldChildren[index] = undefined
            }
            //移动位置
            newStartVnode = newChildren[++newStartIndex]
        }
    }
    //把多余的节点放进去，只有小于或者等于，才说明有剩余
    if(newStartIndex <= newEndIndex){
        for(let i = newStartIndex; i <= newEndIndex; i++) {
            
            // parent.appendChild(createDomElementVnode(newChildren[i]))
            let beforeElement = newChildren[newEndIndex+1]==null?null:
            newChildren[newEndIndex+1].domElement
            parent.insertBefore(createDomElementVnode(newChildren[i]),beforeElement)
            //当before为null,相当于append使用   
        }
    }

  
    //判断中间的undefined
    if(oldStartIndex <= oldEndIndex){
        for(let i = oldStartIndex;i<=oldEndIndex;i++){
            if(oldChildren[i]){
                parent.removeChild(oldChildren[i].domElement)
            }
        }
    }
}