let close = document.querySelector("#closeButton");
close.addEventListener("click", function () {
    let modal = document.querySelector("#myModal");
    modal.className = "modal hidden";
});

function getDetails(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
        return response.json().then(function (data) {

            document.querySelector("#pokeImg").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
            document.querySelector("#pokeHeight").textContent = "Height: " + data.height;
            document.querySelector("#pokeWeight").textContent = "Weight: " + data.weight;
            document.querySelector("#pokeName").textContent = data.name;
            document.querySelector("#myModal").className = "modal";
            let type = document.querySelector("#pokeType");

            var typeString = "";
            for (var x in data.types) {
                var obj = data.types[x];
                typeString += typeString === "" ? obj.type.name : ", " + obj.type.name;
            }
            type.textContent = "Types: " + typeString;
        });
    });
}