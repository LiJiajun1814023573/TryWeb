const fetch = require('node-fetch')
const person = url => {
    return fetch(url) 
      .then(res => res.json())
         .then(data => {
          let datas =[url]  
          for(let i = 0; i<=2; i++){
              datas.push(data[i]['commit']['committer']['date']+data[i]['commit']['message']);
          }
          return datas;
      })
  }
const persons = urls=>{
    ps = []
    urls.forEach(url => {
        ps.push(person(url))
    })
    return ps
}

const catch_commit = urls => {
  Promise.all(persons(urls)).then(value=>{
    console.log(value);
})
}
catch_commit(['https://api.github.com/repos/LiJiajun1814023573/TryWeb/commits'])