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

  function Filterplayersrank(players){
  var topplayersdata =  []
  for( rank in players){
  if(rank>=10){ topplayersdata.push(players)
  }
  return topplayersdata
}
}