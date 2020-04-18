import TodoList from './todoList.js'
import Store from '../store.js'
export default function app(){
    let app1 = document.querySelector('body')
    let list =  new TodoList ({},app1)
    list.render1(list.Vnode,app1)
    Store.subsribe(list.handler)
}