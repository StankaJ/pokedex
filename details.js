function getDetails(id) {
  /*<div id="myModal" class="modal">

<!-- Modal content -->
<div class="modal-content">
  <span class="close">&times;</span>
  <p>Some text in the Modal..</p>
</div>
<span class="close">&times;</span>
</div>*/
  fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function (response) {
    return response.json().then(function (data) {
      
      var root = document.querySelector("#pokemon-list");
      let modal = document.createElement("div");
      let modalContent = document.createElement("div");
      let name = document.createElement("label");
      let close = document.createElement("span");
      let img = document.createElement("img");
      let stats = document.createElement("div");
      let height = document.createElement("label");
      let weight = document.createElement("label");
      let type = document.createElement("label");

      modal.id = "myModal";
      modal.className = "modal";
      modalContent.className = "modal_content";
      name.textContent = data.name;
      name.className = "name"
      close.className = "close";
      close.textContent = "";
      img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png";
      height.textContent = "Height: " + data.height;
      weight.textContent = "Weight: " + data.weight;

      var typeString = "";
      for (var x in data.types) {
        var obj = data.types[x];       
        typeString += typeString===""?obj.type.name : ", " + obj.type.name;
      }
      type.textContent = "Types: " + typeString;
      stats.className = "stats";
      height.className = "stat";
      type.className = "stat";
      weight.className = "stat";

      close.addEventListener("click", function () {
        root.removeChild(modal);
      });

      modal.appendChild(modalContent);
      modalContent.appendChild(name);
      modalContent.appendChild(close);
      modalContent.appendChild(img);
      modalContent.appendChild(stats);
      stats.appendChild(height);
      stats.appendChild(weight);
      stats.appendChild(type);
      root.appendChild(modal);

    });
  });


}