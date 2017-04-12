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
        pokemon.id = id;
        pokemon.addEventListener("click", function () { getDetails(id) });
        pokemon.appendChild(image);
        pokemon.appendChild(label);
        root.appendChild(pokemon);
      }
    })
    checkNoResult();
  }
  
}

function checkNoResult(){
    let pokeList = document.querySelector(".pokemons");
    console.log('CheckNoResult'+pokeList.childNodes.length);
    if (pokeList.childNodes.length == 0)
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
