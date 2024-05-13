function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = {
        cocina: { password: "contraseñacocina", redirect: "http://127.0.0.1:5500/cocina/cocina.html" },
        ventas: { password: "contraseñaventas", redirect: "http://127.0.0.1:5501/Area-ventas/index.html" },
        gerencia: { password: "contraseñagerencia", redirect: "http://127.0.0.1:5500/gerencia/index.html" }
    };

    if (users.hasOwnProperty(username) && users[username].password === password) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = users[username].redirect;
    } else {
        alert("Usuario o contraseña incorrectos");
    }

}
