const MoviesURL = "http://www.omdbapi.com/?t=batman&apikey=ce8afb69";

// fetch api  feature for execute ajax request to server
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


 fetch(MoviesURL) // execute request
 .then(response=>{ return response.json() })
 .then(data=> {
     console.log(data.Title)
    //  document.getElementById("container").innerText = JSON.stringify(data)
 })

 // callback - decleration
 // promise
 // async await

