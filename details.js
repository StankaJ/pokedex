var colorMap = new Map();
colorMap.set("fire", "EE8130");
colorMap.set("normal", "A8A77A");
colorMap.set("water", "6390F0");
colorMap.set("electric", "F7D02C");
colorMap.set("grass", "7AC74C");
colorMap.set("ice", "96D9D6");
colorMap.set("fighting", "C22E28");
colorMap.set("poison", "A33EA1");
colorMap.set("ground", "E2BF65");
colorMap.set("flying", "A98FF3");
colorMap.set("psychic", "F95587");
colorMap.set("bug", "A6B91A");
colorMap.set("rock", "B6A136");
colorMap.set("ghost", "735797");
colorMap.set("dragon", "6F35FC");
colorMap.set("dark", "705746");
colorMap.set("steel", "B7B7CE");
colorMap.set("fairy", "D685AD");

let close = document.querySelector("#closeButton");
close.addEventListener("click", function () {
    document.querySelector("#myModal").classList.add("hidden");
});

function getDetails(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
        return response.json().then(function (data) {
            var firstType = "";
            var secondType = "";
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
                if (firstType != "") {
                    secondType = secondType === "" ? obj.type.name : secondType;
                }
                firstType = firstType === "" ? obj.type.name : firstType;

            }
            type.textContent = "Types: " + typeString; 
            if (secondType === "") {
                document.querySelector("#pokeName").setAttribute("style", "background-color:#" + colorMap.get(firstType));
            }
            else {
                document.querySelector("#pokeName").setAttribute("style", "background: linear-gradient(90deg, #" + colorMap.get(firstType) + " 50%, #" + colorMap.get(secondType) + " 50%)");
            }

        });
    });
}