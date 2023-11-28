let myName = document.getElementById("names");
let title = document.getElementById("name");
myName.onclick = function () {
    estableceNombreUsuario();
  };
function estableceNombreUsuario() {
    let miName = prompt("Por favor, ingresa tu nombre:");
    localStorage.setItem("nombre", miName);
    title.textContent = "¡Hola," + miName +"!";
  }
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    title.textContent = "¡Hola," + nombreAlmacenado +"!";
  }
  function login(){
    window.location.href = "subpaginas/register.html";
  }
document.getElementById('whatsapp').addEventListener('click', function() {
    window.location.href = 'https://www.whatsapp.com/';
});

document.getElementById('facebook').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/';
});

document.getElementById('github').addEventListener('click', function() {
    window.location.href = 'https://www.github.com/';
});

document.getElementById('gmail').addEventListener('click', function() {
    window.location.href = 'https://mail.google.com/';
});

document.getElementById('tiktok').addEventListener('click', function() {
    window.location.href = 'https://www.tiktok.com/';
});
  