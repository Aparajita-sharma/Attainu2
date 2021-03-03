/*var p1first = document.getElementById("imid");
console.log(p1first);*/

/*var p1second = document.getElementsByClassName("imclass");
console.log(p1second);*/

/*var p1third = document.getElementsByTagName("p");
console.log(p1third);*/

/*var p1forth = document.querySelector("p");
console.log(p1forth);*/

/*var p1fifth = document.querySelectorAll("p");
console.log(p1fifth);*/



/*adding a eventlistner*/
var pTag =document.querySelector('p');

function clickcallbackfunction(event){
  console.log("i'm clicked")
}
pTag.addEventListener('click', clickcallbackfunction);


