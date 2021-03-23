console.log("connected");

var players = [
  { name: "Roger Federer", rank: 1 },
  { name: "Rafel Nadal", rank: 2 },
  { name: "Nalbandian", rank: 12 },
  { name: "Andy Murray", rank: 14 },
  { name: "Andy Roddick", rank: 4 },
  { name: "Pete Sampras", rank: 3 },
  { name: "Rod Laver", rank: 190 },
  { name: "Andre Agassi", rank: 11 },
  { name: "Novak Djokovic", rank: 5 },
  { name: "Arthur Ashe", rank: 8 },
  ];


for (var player of players) {
if(player.rank<=10) {
  console.log(player)
}

}
  


arrays=[
  [1,2,3,4],
  [1,6,3,4]
]

for (var value in arrays) {

  if(value[0]==value[1]) {
    console.log("equal");
   }
 else{
   console.log("not equal")
 }
}
