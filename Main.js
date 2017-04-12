"use strict"
var root = document.querySelector(".pokemons");

/*
setTimeout(function () {
  root.innerHTML = '';

  for (let it of poke) {
    let pokemon = document.createElement("li");
    let pokemonImage = document.createElement("img");
    let pokemonLabel = document.createElement("label");
    pokemonImage.src = it.sprite;
    pokemonLabel.textContent = it.name;
    pokemon.appendChild(pokemonImage);
    pokemon.appendChild(pokemonLabel);
    root.appendChild(pokemon);
  }
}, 3000);
var alma;
console.log(fetch('http://pokeapi.co/api/v2/pokemon/?limit=50').then(function(response){return response}));
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/1.png
*/



document.getElementById("pokeSearch").addEventListener("input", function () { fillPoke(this.value) });
/*
function reqListener () {
  poke = JSON.parse(this.response).results;
//  console.log(poke);
  fillPoke('');
//  console.log(this.responseText);
}
*/

/*
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://pokeapi.co/api/v2/pokemon/?limit=50");
oReq.send();
*/
