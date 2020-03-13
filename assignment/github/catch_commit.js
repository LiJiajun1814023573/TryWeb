const person = function(url){
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
