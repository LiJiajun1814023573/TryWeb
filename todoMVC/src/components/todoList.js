import Vnode from './Vnode.js'
// import TodoListItem from './todoListItem.js'
import Store from '../store.js'
export default class TodoList extends Vnode {
    constructor(props){
        super('ul',props)
        console.log(this.Vnode)
    }
    handler() {
        // let datas = Store.getState().todos
        // this.children = datas.filter(todo =>todo.completed==false).map(todo =>{
        //     TodoListItem({key:todo.id},todo,actions)
        // })
        this.newVnode =this.createElement1('ul',{})
        this.patch1(this.newVnode,this.Vnode)
        this.Vnode = this.newVnode
        //将Store中的数据更新到children
        //this.children = data.filter(...).map(,,,);
        //filter根据当前查看的所有是已完成还是未完成进行筛选筛选
        //将key传入item
    }
    unMount(){
        Store.unsubsribe(handler)
        //....
    }
    calc(){
        alert('你好')
    }
    //...
}