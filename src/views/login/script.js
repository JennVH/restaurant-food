function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = {
      
        ventas: { password: "contraseñaventas", redirect: "/Area-ventas/index.html" },
        gerencia: { password: "contraseñagerencia", redirect: "/Area-gerencia/index.html" }
    };

    if (users.hasOwnProperty(username) && users[username].password === password) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = users[username].redirect;
    } else {
        alert("Usuario o contraseña incorrectos");
    }


}
