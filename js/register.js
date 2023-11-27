document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();

    var nombre = document.querySelector('input[type="text"]').value;
    var correo = document.querySelector('input[type="email"]').value;
    var contraseña = document.querySelector('input[type="password"]').value;

    if (nombre === "" || correo === "" || contraseña === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("¡Registro exitoso!");
        function window(){
            window.location.href = "index.html";
        }
    }
});
