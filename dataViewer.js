function fillPoke(filter) {
  if (poke !== undefined) {
    hideById('loaderHolder');
    //@TODO kill me
    let root = document.querySelector(".pokemons");
    root.innerHTML = '';
    console.log('Dosi' + filter);

    poke.forEach(function (pokemonItem) {
      if (pokemonItem.name.startsWith(filter)) {
        let pokemon = document.createElement("li");
        let image = document.createElement("img");
        let label = document.createElement("label");
        let id = pokemonItem.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        let pictureNumber = id;
        image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + pictureNumber + ".png";
        label.textContent = pokemonItem.name;
        pokemonItem.id=id;
        pokemon.id='pokemon_'+id;
        pokemon.addEventListener("click", function () { getDetails(id) });
        pokemon.appendChild(image);
        pokemon.appendChild(label);
        pokemon.classList.add('pokemon');
        root.appendChild(pokemon);
      }
    })
    checkNoResult();
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
