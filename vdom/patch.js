const patch = (node,patches)=>{
    let walker = {index : 0}
    dfswalks(node,walker,patches)
}
const dfswalks = (node,walker,patches)=>{
    let itemPatches = patches[walker.index]
    let len = node.children?
    node.children.length:0
    for(let i = 0;i < len;i++){
        let child = node.children[i]
        walker.index++
        console.log(walker.index)
        dfswalks(child,walker,patches)
    }
    if(itemPatches){
        applyPatches(node,itemPatches)
    }
}
const applyPatches = (node,itemPatches)=>{
    itemPatches.forEach(itemPatch=>{
        switch(itemPatch.change){
            case 'replace':
                let newNode = (typeof itemPatch.node == 'string')?
                document.createTextNode(itemPatch.node): itemPatch.node.render()
                node.parentNode.replaceChild(newNode,node)
                break
            case 'reorder':
                reorderChildren(node,itemPatch.moves)
                break
            case 'props':
                setProps(node,itemPatch)
                break
            case 'text':
                if(node.textContent){
                node.textContent = itemPatch.text
                } else {
                    node.nodeValue = itemPatch.text
                }
                break
            default:
                throw new Error('unknown patch change' + itemPatch.change)
        }
    })
}
const setProps = (node,itemPatch)=>{
    for(let key in itemPatch.props){
        if(itemPatch.props[key] == void 666){
            node.removeAttribute(key)
        }else {
            let value = itemPatch.props[key]
            node.setAttribute(key,value)
        }
    }
}
// module.exports = patch
function reorderChildren (node, moves) {
    var staticNodeList =Array.prototype.slice.call(node.children)
    var maps = {}
  
    staticNodeList.forEach (node => {
      if (node.nodeType === 1) {
        var key = node.getAttribute('key')
        if (key) {
          maps[key] = node
        }
      }
    })
    if(moves){
    moves.forEach(move=>{
      var index = move.index
      if (move.type === 0) { 
        if (staticNodeList[index] === node.children[index]) { 
          node.removeChild(node.children[index])
        }
        staticNodeList.splice(index, 1)
      } else if (move.type === 1) {
        let insertNode = maps[move.item.key]
          ? maps[move.item.key].cloneNode(true) 
          : (typeof move.item === 'object')
              ? move.item.render()
              : document.createTextNode(move.item)
        staticNodeList.splice(index, 0, insertNode)
        node.insertBefore(insertNode, node.children[index] || null)
      }
    })
}
  }