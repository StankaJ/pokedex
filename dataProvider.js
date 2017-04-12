var pokemons = [];
var pokeTypes = [];

fetchList(300);
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
  }).then(function(){fillPoke('')});
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
      pokemons.push(pokemon.id);
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

var pokemonTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 10001, 10002];

//var pokemonTypes = [4];
function collectTypes() {
    pokemonTypes.forEach(function (typeId) {
        fetch("http://pokeapi.co/api/v2/type/" + typeId).then(function (response) {
            return response.json().then(function (data) {
                //                console.log(data);
                fillTypes(data);
            });
        })
    });
}

function fillTypes(typePokemonList) {
    let typeName = typePokemonList.name;
    let pokemonList = typePokemonList.pokemon;
    pokemonList.forEach(function (pokemon) {
        let pokemonId = pokemon.pokemon.url.replace("http://pokeapi.co/api/v2/pokemon/", "").replace("/", "");

        setPokemonType(parseInt(pokemonId)-1, typeName);
    });
}

function setPokemonType(pokemonId, typeName) {
    let pokemon = poke[pokemonId];
    if (pokemon !== undefined) {
        if (pokemon.types.length == 0) {
            pokemon.types.push(typeName);
        }
        else if (pokemon.types.indexOf(typeName) == -1) {
            pokemon.types.push(typeName);
        }
        poke[pokemonId] = pokemon;
    }
    
}