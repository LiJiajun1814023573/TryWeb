const fetch = require('node-fetch')

const repo_search = message => {
    fetch('https://api.github.com/search/repositories?q='+message+'&sort=stars&order=desc')
    .then (data => data.json())   
    .then (data =>  console(data))
}

repo_search('web')