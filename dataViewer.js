function fillPoke(filter) {
  if (poke !== undefined) {
    root.innerHTML = '';
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
  }
}
