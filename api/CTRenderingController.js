console.log("Render");
function tRenderer(){};
tRenderer.prototype.populate = function(json){
      document.getElementById("1").textContent = json.cotacao;
      document.getElementById("2").textContent = json.orCompra;
      document.getElementById("3").textContent = json.orVenda;
};
tRenderer.prototype.populateUser = function() { 
  document.getElementById("userTitle").textContent = tCommunicator.getUser();
};
