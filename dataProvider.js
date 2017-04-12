var poke;


fetch("https://pokeapi.co/api/v2/pokemon/?limit=200").then(function (response) {
    return response.json().then(function (data) {
        poke = data.results;
        fillPoke('');
    });
});

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