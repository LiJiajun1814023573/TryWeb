class Header extends Vnode{
    constructor(...chilren){
        super('div',{id:'header'},...chilren)
    }
}
let header = new Header(title,input).Vnode