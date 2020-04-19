class Footer extends Vnode{
    constructor(){
        super('div',{id:'footer'},createElement('span',{id:"count"},'1 item left'),
        createElement('ul',{id:"filter"},createElement('li',{},'All'),createElement('li',{},'Active'),createElement('li',{},'Completed')),
        createElement('span',{display:'none',id:'right'},'Clear completed'))
    }
}
let foot = new Footer().Vnode