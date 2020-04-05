const diff = (oldTree,newTree)=>{
    let index = 0
    let patches = {}
    dfsWalk(oldTree,newTree,index,patches)
    return patches
}
const dfsWalk = (oldNode,newNode,index,patches)=>{
    let itemPatch = []
    if (newNode == null){return;}
    else if (isString(oldNode.children) && isString(newNode.children)){
        if(newNode.children!= oldNode.children){
            itemPatch.push({change:'text',text:newNode.children})
        }
    }
    else if (ifSameTag(oldNode,newNode)){
        let propsDiffrence = diffProps(oldNode,newNode)
        if(propsDiffrence) itemPatch.push({change:'props',props:propsDiffrence})
        if(newNode.children){
            diffChildren(oldNode.children,newNode.children,index,patches,itemPatch)
        }
    } else {
        itemPatch.push({change:'replace',node:newNode})
    }
    if(itemPatch.length){
        patches[index] = itemPatch
    }
}
const diffChildren = (oldChildren,newChildren,index,patches,itemPatch)=>{
    let diffs =  listDiff(oldChildren,newChildren,'key')
    newChildren = diffs.children
    if(diffs.moves.length){
        let reorderPatch = {change:'reorder',moves:diffs.moves}
        itemPatch.push(reorderPatch)
    }
    let itemNodeIndex = index
    if(oldChildren !=null){
    oldChildren.forEach((child,i)=>{
        let newChild = newChildren[i]
        itemNodeIndex = itemNodeIndex + 1
        dfsWalk(child,newChild,itemNodeIndex,patches)
    })
    }
}


const ifSameTag =(oldNode,newNode)=>{
        if(oldNode.tag == newNode.tag && oldNode.key == newNode.key){
            return true
        } else {
            return false
        }
}
const diffProps = (oldNode,newNode) =>{
   let propsDiffrence = {}
   let item = 0
   for (let key in oldNode.props){
       if(newNode.props[key] != oldNode.props[key]){
            item++
            propsDiffrence[key] = newNode.props[key]
       }
   }
   for (let key in newNode.props){
       if(!oldNode.props[key]){
            item++
            propsDiffrence[key] = newNode.props[key]
       }
   }
   if(item==0) propsDiffrence = null
   return propsDiffrence
}
// const listDiff  = (oldList, newList, key)=>{
//     let oldMap = makeKeyIndexAndFree(oldList, key)
//     let newMap = makeKeyIndexAndFree(newList, key)
  
//     let newFree = newMap.free
  
//     let oldKeyIndex = oldMap.keyIndex
//     let newKeyIndex = newMap.keyIndex
  
//     let moves = []
  
//     // a simulate list to manipulate
//     let children = []
//     let i = 0
//     let item
//     let itemKey
//     let freeIndex = 0
  
//     // first pass to check item in old list: if it's removed or not
//     while (i < oldList.length) {
//       item = oldList[i]
//       itemKey = getItemKey(item, key)
//       if (itemKey) {
//         if (!newKeyIndex.hasOwnProperty(itemKey)) {
//           children.push(null)
//         } else {
//           let newItemIndex = newKeyIndex[itemKey]
//           children.push(newList[newItemIndex])
//         }
//       } else {
//         let freeItem = newFree[freeIndex++]
//         children.push(freeItem || null)
//       }
//       i++
//     }
  
//     var simulateList = children.slice(0)
  
//     // remove items no longer exist
//     i = 0
//     while (i < simulateList.length) {
//       if (simulateList[i] === null) {
//         remove(i)
//         removeSimulate(i)
//       } else {
//         i++
//       }
//     }
  
//     // i is cursor pointing to a item in new list
//     // j is cursor pointing to a item in simulateList
//     var j = i = 0
//     while (i < newList.length) {
//       item = newList[i]
//       itemKey = getItemKey(item, key)
  
//       let simulateItem = simulateList[j]
//       let simulateItemKey = getItemKey(simulateItem, key)
  
//       if (simulateItem) {
//         if (itemKey === simulateItemKey) {
//           j++
//         } else {
//           // new item, just inesrt it
//           if (!oldKeyIndex.hasOwnProperty(itemKey)) {
//             insert(i, item)
//           } else {
//             // if remove current simulateItem make item in right place
//             // then just remove it
//             let nextItemKey = getItemKey(simulateList[j + 1], key)
//             if (nextItemKey === itemKey) {
//               remove(i)
//               removeSimulate(j)
//               j++ // after removing, current j is right, just jump to next one
//             } else {
//               // else insert item
//               insert(i, item)
//             }
//           }
//         }
//       } else {
//         insert(i, item)
//       }
  
//       i++
//     }
  
//     //if j is not remove to the end, remove all the rest item
//     let k = simulateList.length - j
//     while (j++ < simulateList.length) {
//       k--
//       remove(k + i)
//     }
  
  
//     const remove = index =>{
//       var move = {index: index, type: 0}
//       moves.push(move)
//     }
  
//     const insert = (index, item)=>{
//       var move = {index: index, item: item, type: 1}
//       moves.push(move)
//     }
  
//     const removeSimulate = index => {
//       simulateList.splice(index, 1)
//     }
  
//     return {
//       moves: moves,
//       children: children
//     }
//   }
  
//   /**
//    * Convert list to key-item keyIndex object.
//    * @param {Array} list
//    * @param {String|Function} key
//    */
//    const makeKeyIndexAndFree =  (list, key)=> {
//     let keyIndex = {}
//     let free = []
//     for (let i = 0, len = list.length; i < len; i++) {
//       let item = list[i]
//       let itemKey = getItemKey(item, key)
//       if (itemKey) {
//         keyIndex[itemKey] = i
//       } else {
//         free.push(item)
//       }
//     }
//     return {
//       keyIndex: keyIndex,
//       free: free
//     }
//   }
  
//   const getItemKey = (item, key)=> {
//     if (!item || !key) return void 666
//     return typeof key === 'string'
//       ? item[key]
//       : key(item)
//   }
const type = function (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
  }
const isString = function isString (list) {
    return type(list) === 'String'
  }
function listDiff (oldList, newList, key) {

    var oldMap = makeKeyIndexAndFree(oldList, key)

    var newMap = makeKeyIndexAndFree(newList, key)
  
    var newFree = newMap.free
  
    var oldKeyIndex = oldMap.keyIndex
    var newKeyIndex = newMap.keyIndex
  
    var moves = []
  
    // a simulate list to manipulate
    var children = []
    var i = 0
    var item
    var itemKey
    var freeIndex = 0
  
    // first pass to check item in old list: if it's removed or not
    while (i < oldList.length) {
      item = oldList[i]
      itemKey = getItemKey(item, key)
      if (itemKey) {
        if (!newKeyIndex.hasOwnProperty(itemKey)) {
          children.push(null)
        } else {
          var newItemIndex = newKeyIndex[itemKey]
          children.push(newList[newItemIndex])
        }
      } else {
        var freeItem = newFree[freeIndex++]
        children.push(freeItem || null)
      }
      i++
    }
  
    var simulateList = children.slice(0)
  
    // remove items no longer exist
    i = 0
    while (i < simulateList.length) {
      if (simulateList[i] === null) {
        remove(i)
        removeSimulate(i)
      } else {
        i++
      }
    }
  
    // i is cursor pointing to a item in new list
    // j is cursor pointing to a item in simulateList
    var j = i = 0
    while (i < newList.length) {
      item = newList[i]
      itemKey = getItemKey(item, key)
  
      var simulateItem = simulateList[j]
      var simulateItemKey = getItemKey(simulateItem, key)
  
      if (simulateItem) {
        if (itemKey === simulateItemKey) {
          j++
        } else {
          // new item, just inesrt it
          if (!oldKeyIndex.hasOwnProperty(itemKey)) {
            insert(i, item)
          } else {
            // if remove current simulateItem make item in right place
            // then just remove it
            var nextItemKey = getItemKey(simulateList[j + 1], key)
            if (nextItemKey === itemKey) {
              remove(i)
              removeSimulate(j)
              j++ // after removing, current j is right, just jump to next one
            } else {
              // else insert item
              insert(i, item)
            }
          }
        }
      } else {
        insert(i, item)
      }
  
      i++
    }
  
    //if j is not remove to the end, remove all the rest item
    var k = simulateList.length - j
    while (j++ < simulateList.length) {
      k--
      remove(k + i)
    }
  
  
    function remove (index) {
      var move = {index: index, type: 0}
      moves.push(move)
    }
  
    function insert (index, item) {
      var move = {index: index, item: item, type: 1}
      moves.push(move)
    }
  
    function removeSimulate (index) {
      simulateList.splice(index, 1)
    }
  
    return {
      moves: moves,
      children: children
    }
  }
  
  function makeKeyIndexAndFree (list, key) {
    var keyIndex = {}
    var free = []
    if(list.length){
    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i]
      var itemKey = getItemKey(item, key)
      if (itemKey) {
        keyIndex[itemKey] = i
      } else {
        free.push(item)
      }
    }
}
    return {
      keyIndex: keyIndex,
      free: free
    }
  }
  
  function getItemKey (item, key) {
    if (!item || !key) return void 666
    return typeof key === 'string'
      ? item[key]
      : key(item)
  }
  