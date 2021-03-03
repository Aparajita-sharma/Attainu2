console.log("connected");

var post = fetch("https://jsonplaceholder.typicode.com/users?_limit=10/")
.then(function (response)
{
  return response.text();
})
.then(function(response){
  console.log(response);
})
.catch(function (error){
  console.log(error);
});




for (posts of post){
  var postlist = document.querySelector(".imcard");
}
