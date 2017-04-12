var pokemons = [];

fetchList(10);
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png"

function fetchList(limit) {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + limit).then(function (response) {
    return response.json().then(function (data) {
      console.log(data);
      for (i in data.results) {
        let pokemon = {
          id: "",
          name,
          url: "",
        };
        
        pokemon.id = data.results[i].url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        pokemon.name = data.results[i].name;
        pokemon.url = data.results[i].url;

        pokemons.push(pokemon);
      }
      console.log(pokemons);
    });
  });
}

function getPokemon(id) {
  return pokemons.find("id", id);
}