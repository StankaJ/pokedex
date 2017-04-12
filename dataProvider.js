var poke;


fetch("https://pokeapi.co/api/v2/pokemon/?limit=200").then(function (response) {
  return response.json().then(function (data) {
    poke = data.results;
    fillPoke('');
  });
});