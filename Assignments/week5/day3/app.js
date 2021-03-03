console.log("connected")

function phone(name, gamming, display, internet){
  this.name = name;
  this.gamming = gamming;
  this.display = display;
  this.internet = internet;

}
phone.introduce = function (){
  return(
    "this is"+
    this.name+
    "it has game "+
    this.gamming+
    "it's display"+
    this.display+
    "it has access to internet"+
    this.internet
  );
};

var AntennaPhone = new phone("antennaphone", "none", "normal", "not");
var NokiaPhone = new phone("nokia", "snake", "normal", "not" );
var SmartPhone = new phone("samsung", "yes", "touchscreen", "yes" );

console.log( AntennaPhone, NokiaPhone, SmartPhone );