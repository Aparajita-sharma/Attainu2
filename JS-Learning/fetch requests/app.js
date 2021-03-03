console.log("connected");

/*var sundeep = {name:"sunndeep", role:"instructor" };*/

/*var proxyURL = "https://corsanywhere.herokuapp.com/";*/


/*var baseURL = "https://reqres.in";
fetch("'baseURL"+"/api/users",{
  method: "GET"
})
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data.data);
});*/

var proxyURL = "https://corsanywhere.herokuapp.com/";
fetch(proxyURL +"https://github.com")
.then(function (response){
  return response.text();
})
.then(function(response){
  console.log(response)
})
.catch(function (error){
  console.log(error);
});

var baseURL = "https://reqres.in";
fetch("'baseURL"+"/api/users",{
  method: "GET"
})
.then(function(response){
  return response.json();
})