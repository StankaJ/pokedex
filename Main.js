"use strict"

var poke =
  [
    {
      "id": 1,
      "name": "Bulbasaur",
      "type": ["grass", "posion"],
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      "id": 5,
      "name": "Charmeleon",
      "type": ["fire"],
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
      "id": 15,
      "name": "Beedrill",
      "type": ["bug", "posion"],
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
      "id": 193,
      "name": "Yanma",
      "type": ["bug", "flying"],
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
      "id": 152,
      "name": "Chikorita",
      "type": ["grass"],
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    },
  ];

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
function fillPoke() {
  root.innerHTML = '';
  poke.forEach(function(pokemonItem){
    let pokemon = document.createElement("li");
    let pokemonImage = document.createElement("img");
    let pokemonLabel = document.createElement("label");
    let pictureNumber = pokemonItem.url.replace("http://pokeapi.co/api/v2/pokemon/","").replace("/","");
    pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/"+pictureNumber+".png";
    pokemonLabel.textContent = pokemonItem.name;
    pokemon.appendChild(pokemonImage);
    pokemon.appendChild(pokemonLabel);
    root.appendChild(pokemon);
  })
}

function reqListener () {
  poke = JSON.parse(this.response).results;
//  console.log(poke);
  fillPoke();
//  console.log(this.responseText);
}


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://pokeapi.co/api/v2/pokemon/?limit=50");
oReq.send();
/*

*/