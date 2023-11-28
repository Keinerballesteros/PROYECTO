function login(){
    window.location.href = "./subpaginas/register.html";
  }
  function mensaje(texto) {
    var mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.style.display = "block";
    mensajeDiv.textContent = texto;
  }
  
  function ocultarMensaje() {
    document.getElementById("mensaje").style.display = "none";
  }


  