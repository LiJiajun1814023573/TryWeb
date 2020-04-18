import {createElement,render,patch} from '../vdom/index.js'
export default class Vnode {
    constructor(tags,props,children){
        this.Vnode = createElement(tags,props,children)
    }
    render1(vdom,place){
        render(vdom,place)
    }
    patch1(newDom,oldDom){
        patch(newDom,oldDom)
    }
}   