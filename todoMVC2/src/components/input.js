class Input extends Vnode{
    constructor(props){
        super('input',props)
        // let button = createElement('button',{event:{'click':{a:a}}},'按钮')
    }
    static getText(){
        return document.querySelector('input').value
    }
    static addToList(e){
        e=document.all?window.event:e;
        if((e.keyCode || e.which)==13){
        store.dispatch(addTodo(Input.getText()))
        }
    }
    static handler(){
        console.log(store.getState())
    }
}
store.subscribe(Input.handler)
let need = new Input({event:{'keydown':{addToList:Input.addToList}},id:'new-todo',type:'text',placeholder:'What needs to be done?'})
let input = need.Vnode