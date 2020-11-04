console.log("connected");

var a=3;
var b=5;
 var sum=a+b;
 console.log(sum)



 //declaration
 function addTwoNumbers(){
   var num1 = parseInt(prompt("enter num1"));
   var num2= parseInt(prompt("enter num2 "));
   console.log(num1+num2);
 }

 //invoking
 addTwoNumbers();


 //functions inside the objects

 var soumya={
   name :"soumya sadhana sharma",
   profssion :"student",
   introduction : function () {
     console.log(
       "Hi I am"+ soumya.name+ "and i'm a"+ soumya.profssion
       );

   }
 }

 console.log(soumya.introduction());

 //USING BUILT IN METHOD
 //Common methods for strings:

var name ="soumya"
console.log(name);

name.length()  //it will gives lenght of the sring 6.
name.toLowerCase // convert to lowercase answer // yodraj,
name.toUpperCase // convert to Uppercase // YODRAJ
name.slice // slice expects two inputs 1) start , 2) end // string.slice(start, end)
Start : Required. The position where to begin the extraction. First character is at position 0
End : Optional. The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters
from the start-position to the end of the string // name.slice(0,2) // “yod”
name.idexOf // name.indexOf(r) // 3
name.replace // name.replace (“r” “h”) // yodhaj // its not changing the original value it
will be a new value from it..
Functions in Arrays:


//FUNCTIONS IN ARRAY
var a = [1,2,3,4];
console.log(a);

// Push() / Pop() / unshift() / concat() / reverse() / 


//method related to objects:

//hasOwnProperty():

//BUILT IN FUNCTIONS

fuction addtwonumberswithinput(number1, number2){
  console.log(typeof number2);
  if (typeof number1 !== "number" || typeof    number2 !== "number")
  return "Invalid data";
  else return number1 + number2;

}
// if you are not using the return keywords, by default it will use undefined
var key1 ="hi";
var key2 ="there";
var sum = addtwonumberswithinputs(key1, key2);
console.log(sum);