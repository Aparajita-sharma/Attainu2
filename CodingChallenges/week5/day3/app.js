console.log("connected")

function CustomObject(a, b, c, d){
  this.a =a;
  this.b =b;
  this.c =c;
  this.d =d;
};
CustomObject.prototype.introduce = function () {
  return (This.a +"cola");
  
};


var childData = new CustomObject(1, 2, 3,4);
console.log( childData);