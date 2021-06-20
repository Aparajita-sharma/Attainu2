var arr= [];
 var i;
     for (i = 0; i < 10; i++){
    
    
      if(i!=null)
      {var promptVal =prompt("Enter your stack" );
      if(promptVal==="enough"){
        break;
      }
      arr.push(promptVal);
     }
  
   }
  
 
var  bigdiv = document.createElement("div")
for(let list of arr){

var itemdiv = document.createElement("div")
itemdiv.classList.add("itemdiv");
bigdiv.appendChild(itemdiv);
itemdiv.innerHTML= list;
document.body.append(bigdiv);
}


let  btn1 = document.querySelector(".btn");
btn1.addEventListener("click",function (event){
  
  document.write(arr.pop())
  
})

















































































































