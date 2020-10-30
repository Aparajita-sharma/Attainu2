//V1

/*var pocketMoneyInHand = prompt( "Enter your pocketmoney");
var icecreamPrice = 40;

if (icecreamPrice >pocketMoneyInHand)   {
  alert("sorry, you can not buy the icecream")

}  else {
  pocketMoneyInHand = pocketMoneyInHand - icecreamPrice;
    document.write("Enjoy your icecream, "+"you have"+ pocketMoneyInHand);
}     
*/



//V2
var pocketMoneyInHand = prompt( "Enter your pocketmoney");
var icecreamPrice = 40;


var convertedPocketMoney= parseInt(pocketMoneyInHand);
var isNotValidnumber = isNaN(convertedPocketMoney);

if (isNotValidnumber=== true){
  alert("Invalid Number");
} else {
  if (icecreamPrice > pocketMoneyInHand) {
    alert("not enought money");

  } else {
   pocketMoneyInHand = pocketMoneyInHand - icecreamPrice;
   document.write("enjoy your icecream " +" you have returned "+pocketMoneyInHand)
  }

}
