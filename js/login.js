document.getElementById('btn').disabled = true;

function validate() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if(username.value !== "" && password.value !== "") {
        document.getElementById('btn').disabled = false;
    } else {
        document.getElementById('btn').disabled = true;
    }
}

username.addEventListener('input', function (evt) {
    password.disabled = this.value.trim() === "" ? true : false;
    validate();
});

password.addEventListener('input', function (evt) {
    validate();
});

