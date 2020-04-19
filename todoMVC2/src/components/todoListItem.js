
class TodoListItem extends Vnode {
    constructor(props,text){
        super('li',props,text)
    }
    handler() {

    }
    unMount(handler){
        store.unsubsribe(handler)
    }
}