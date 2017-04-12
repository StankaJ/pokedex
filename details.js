let close = document.querySelector("#closeButton");
console.log("add");
close.addEventListener("click", function () {
    console.log("Close");
    let modal = document.querySelector("#myModal");
    modal.className = "modal hidden";
});

function getDetails(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
        return response.json().then(function (data) {

            let img = document.querySelector("#pokeImg");
            let height = document.querySelector("#pokeHeight");
            let weight = document.querySelector("#pokeWeight");
            let type = document.querySelector("#pokeType");
            let name = document.querySelector("#pokeName");
            let modal = document.querySelector("#myModal");

            name.textContent = data.name;
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
            height.textContent = "Height: " + data.height;
            weight.textContent = "Weight: " + data.weight;
            modal.className = "modal";
            console.log(data.name);
            console.log(data.height);
            console.log(data.weight);

            var typeString = "";
            for (var x in data.types) {
                var obj = data.types[x];
                typeString += typeString === "" ? obj.type.name : ", " + obj.type.name;
            }
            type.textContent = "Types: " + typeString;


        });
    });


}