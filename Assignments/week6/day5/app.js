 fetch("https://raw.githubusercontent.com/googlearchive/android-Quiz/master/Application/src/main/assets/Quiz.json")
  
.then(function(resolve){
   console.log(resolve)
  })

  .then(function(data){
    var random = Math.floor(Math.random() * data.length);
    var randomque = data[random].question;

    var h1tag =document.querySelector("h1")
    h1tag.textContent(randomque)
  })

  
