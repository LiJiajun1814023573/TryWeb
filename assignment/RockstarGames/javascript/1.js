fetch('https://www.rockstargames.com/newswire/get-posts.json?page=$PAGE' ,{
    method:'GET',
    mode:'no-cors',})
.then(
    function(response) {
        console.log(response)
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

