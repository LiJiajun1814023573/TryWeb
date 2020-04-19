
class TodoList extends Vnode {
    constructor(props){
        super('ul',props)
        console.log(this.Vnode)
        this.children = null
    }   
    handler() {
        this.children = store.getState().todos.filter(todo=>todo.completed==false).map(todo=>
           new TodoListItem({key:todo.id},todo.text).Vnode
        )
        this.newVnode =createElement('ul',{},...this.children)
        console.log(this.newVnode)
        patch(this.Vnode,this.newVnode)
        this.Vnode = this.newVnode
        //将Store中的数据更新到children
        //this.children = data.filter(...).map(,,,);
        //filter根据当前查看的所有是已完成还是未完成进行筛选筛选
        //将key传入item
    }
    unMount(handler){
        store.unsubsribe(handler)
    }
}
let lists = new TodoList({id:'ul_list'})
store.subscribe(lists.handler.bind(lists))
let list = lists.Vnode
