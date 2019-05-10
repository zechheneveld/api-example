// function requestComplete(evt){
  
//   console.log(this.responseText);
//   let result = JSON.parse(this.responseText);
//   console.log(result.abilities[0].ability.name)
//   document.getElementById("ablilityName").innerText = result.abilities[0].ability.name;
// };
// function transferFailed(evt){
//   console.log(evt);
// }
// function getData(){
// let pokemonName = document.getElementById("pokemonName").value;
// let req = new XMLHttpRequest();
// let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
// req.open("GET", url, true);
// req.onload = requestComplete;
// req.onerror = transferFailed;
// req.onabort = transferFailed;
// req.send();
// }


function getAdvice (){
  $.getJSON("https://api.adviceslip.com/advice")
  .done(function(data){
    console.log(data.slip.advice)
    $("#advice").text(data.slip.advice)
  })
  .fail(function(data){
    console.log(data);
  })

}