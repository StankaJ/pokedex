let close = document.querySelector("#closeButton");
close.addEventListener("click", function () {
    document.querySelector("#myModal").classList.add("hidden");
});

function getDetails(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
        return response.json().then(function (data) {
            var firstType = "";
            document.querySelector("#pokeImg").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
            document.querySelector("#pokeHeight").textContent = "Height: " + data.height;
            document.querySelector("#pokeWeight").textContent = "Weight: " + data.weight;
            document.querySelector("#pokeExp").textContent = "Base experience: " + data.base_experience;
            document.querySelector("#pokeDefault").textContent = "Default: " + data.is_default;
            document.querySelector("#pokeName").textContent = data.name;
            document.querySelector("#myModal").classList.remove("hidden");
            let type = document.querySelector("#pokeType");

            var typeString = "";
            for (var x in data.types) {
                var obj = data.types[x];
                typeString += typeString === "" ? obj.type.name : ", " + obj.type.name;
                firstType = firstType === "" ? obj.type.name : firstType;
            }
            type.textContent = "Types: " + typeString;
            document.querySelector("#pokeName").className = "name " + firstType;           
        });
    });
}