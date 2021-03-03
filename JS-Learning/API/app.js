console.log("connected");

function successCallback(position){
  console.log(position);
}

function errorCallback(err){
  console.log(err);
}
if(navigator.geolcation) {
  navigator.geolocation.getCurrentPositi(successCallback, errorCallback);
}else{
  console.log("OOPS.My bad :(");
}

function fetchposts(){
  fetch(corseErrorRemoveURL + "https://jsonplceholder.typicode.com/users")
  .then(function (response){
   return response.json();
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });
}

localStorage.setItem("name","sundeep");