
function addTwoNumberSlowly(callbackFunction,a,b){
setTimeout (function() {
 var sum = a+b;
 if(sum>20){
   callbackFunction("sum is grater than 20",null)
 } else {
   callbackFunction(null, sum)
 };
},5000)
}

addTwoNumberSlowly( function (err,result){
if(err!==null) alert(err);
else console.log("success! sum is"+ result);
},
5,
9
)

