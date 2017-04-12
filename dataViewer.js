function fillPoke(filter) {
  if (poke !== undefined) {
    hideById('loaderHolder');
    //@TODO kill me
    let root = document.querySelector(".pokemons");
    root.innerHTML = '';

    poke.forEach(function (pokemonItem) {
        let id = pokemonItem.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        pokemonItem.id=id;
        let pokemon = {};
        pokemon.id = id;
        pokemon.name=pokemonItem.name;
        pokemon.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
        createPokemonLi(pokemon);
    })
    checkNoResult();
  }
  
}

function createPokemonLi(pokemon){
    let pokemonListHolder = document.querySelector(".pokemons");
    if (pokemonListHolder.querySelector(".pokemon_"+pokemon.id) == null)
    {
        let pokemonLi = document.createElement("li");
        let image = document.createElement("img");
        let label = document.createElement("label");
        let pictureNumber = pokemon.id;
        image.src = pokemon.src; //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + pictureNumber + ".png";
        label.textContent = pokemon.name;
        pokemonLi.id='pokemon_'+pokemon.id;
        pokemonLi.addEventListener("click", function () { getDetails(id) });
        pokemonLi.appendChild(image);
        pokemonLi.appendChild(label);
        pokemonLi.classList.add('pokemon');
        pokemonListHolder.appendChild(pokemonLi);
    }
    else
    {
    
    }
}


function filterPoke(filter)
{
    poke.forEach(function (pokemonItem){
        if (pokemonItem.name.startsWith(filter))
        {
            showById('pokemon_'+pokemonItem.id);
        }
        else
        {
            hideById('pokemon_'+pokemonItem.id);
        }
    });
    checkNoResult();
}

function checkNoResult(){
    let pokeList = document.querySelector(".pokemons>.pokemon:not(.hidden)");
 //   let pokemons = pokeList.querySelector(".pokemon:not(.hidden)");
 //   console.log('CheckNoResult'+pokemons);
    
    if (pokeList == null)
    {
        showById('noResultHolder');
    }
    else
    {
        hideById('noResultHolder');
    }
}

function showById(id){
  let obj = document.querySelector("#"+id);
  obj.classList.remove('hidden');
}
function hideById(id){
  let obj = document.querySelector("#"+id);
  obj.classList.add('hidden');
}
