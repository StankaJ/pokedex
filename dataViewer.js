function fillPoke(filter) {
    if (pokemons !== undefined) {
        hideById('fountainG');
        pokemons.forEach(function (pokemonItem) {
            //            let id = pokemonItem.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
            //            pokemonItem.id = id;
            //            pokemonItem.types = [];
            //            let pokemon = {};
            //            pokemon.id = id;
            //            pokemon.name = pokemonItem.name;
            //            pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
            createPokemonLi(pokemonItem);
        })
        checkNoResult();
    }

}

function createPokemonLi(pokemon) {
    let pokemonListHolder = document.querySelector(".pokemons");
    if (pokemonListHolder.querySelector(".pokemon_" + pokemon.id) == null) {
        let pokemonLi = document.createElement("li");
        let image = document.createElement("img");
        let label = document.createElement("label");
        let pictureNumber = pokemon.id;
        image.src = pokemon.src; //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + pictureNumber + ".png";
        label.textContent = pokemon.name;
        pokemonLi.id = 'pokemon_' + pokemon.id;
        pokemonLi.addEventListener("click", function () { getDetails(pokemon.id) });
        pokemonLi.appendChild(image);
        pokemonLi.appendChild(label);
        pokemonLi.classList.add('pokemon');
        pokemonListHolder.appendChild(pokemonLi);
    }
    else {

    }
}


function filterPoke(filter) {
    pokemons.forEach(function (pokemonItem) {
        if (pokemonItem.name.startsWith(filter)) {
            showById('pokemon_' + pokemonItem.id);
        }
        else {
            hideById('pokemon_' + pokemonItem.id);
        }
    });
    checkNoResult();
}

function filterByClass(filter) {
    let objs = document.querySelectorAll(".pokemon:not(." + filter + ")");
    objs.forEach({ function(obj) { obj.classList.add('hidden'); } });
}

function checkNoResult() {
    let pokeList = document.querySelector(".pokemons>.pokemon:not(.hidden)");
    //   let pokemons = pokeList.querySelector(".pokemon:not(.hidden)");
    //   console.log('CheckNoResult'+pokemons);

    if (pokeList == null) {
        showById('noResultHolder');
    }
    else {
        hideById('noResultHolder');
    }
}

function showById(id) {
    let obj = document.querySelector("#" + id);
    obj.classList.remove('hidden');
}

function ShowPokemonByClassName(className) {
    let objs = document.querySelectorAll(".pokemon." + className);
    objs.forEach({ function(obj) { obj.classList.remove('hidden'); } });
}

function hideByClassName(className) {
    let objs = document.querySelectorAll(".pokemon." + className);
    objs.forEach({ function(obj) { obj.classList.add('hidden'); } });
}

function hideById(id) {
    let obj = document.querySelector("#" + id);
    obj.classList.add('hidden');
}


function setTypeColor(pokemon) {
    if (pokemon !== undefined) {
        if (pokemon.typeNames !== undefined) {
            var firstType = pokemon.typeNames[0];
            var secondType = "";
            if (pokemon.typeNames.length > 1) {
                secondType = pokemon.typeNames[1];
            }
            if (secondType === "") {
                document.querySelector("#pokemon_" + pokemon.id).setAttribute("style", "background-color:#" + colorMap.get(firstType));
            }
            else {
                document.querySelector("#pokemon_" + pokemon.id).setAttribute("style", "background: linear-gradient(90deg, #" + colorMap.get(firstType) + " 50%, #" + colorMap.get(secondType) + " 50%)");
            }
        }
    }
}

function decoratePokemons() {
    pokemons.forEach(function (pokemon) {
        if (pokemon.typeNames != undefined) {
            for (let i = 0; i < pokemon.typeNames.length; i++) {
                document.querySelector("#pokemon_" + pokemon.id).classList.add(pokemon.typeNames[i]);
            }
            setTypeColor(pokemon);
        }
    });
}
