var pokemons = [];
var poke = [];

fetchList(10);
fetchPokemon(2);
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png"

function fetchList(limit) {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + limit).then(function (response) {
    return response.json().then(function (data) {
      for (i in data.results) {
        let pokemon = {
          id : "",
          name,
          url : "",
          height : "",
          weight : "",
          types : []          
        };

        pokemon.id = data.results[i].url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        pokemon.name = data.results[i].name;
        pokemon.url = data.results[i].url;

        pokemons.push(pokemon);
      }
    });
  });
}

function searchList(id, list) {
  for (i in pokemons) {
    if (pokemons[i].id == id)
    {
      return pokemons[i];
    }
  }
}

function fetchPokemon(id) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
    return response.json().then(function (data) {
      console.log(data);
        let pokemon = searchList(id);
        console.log(pokemon);
        if (pokemon != null) {
          pokemon.height = data.height;
          pokemon.weight = data.weight;
          pokemon.types = data.types;
      }
      poke.push(pokemon.id);
      console.log(pokemons);

      return pokemon;
    });
  });
}

function getPokemon(id) {
  let pokemon;
  if (poke.indexOf(id)) {
    pokemon = searchList(id);
  } else {
    pokemon = fetchPokemon(id);
  }
}