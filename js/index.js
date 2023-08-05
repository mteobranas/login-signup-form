//define una variable para detectar la condición del usuario
//si existe el item "login_success" da true, sino false
const user = JSON.parse(localStorage.getItem("login_success")) || false

//si es false, redirecciona a la página de login
if (!user) {
    window.location.href = "login.html"
}

//define una variable para el botón de logout
const logout = document.getElementById("logout")

//escucha el evento click del logout
//cuando se presiona, remueve el item "login_success" del local storage
//y redirecciona a la página de login
logout.addEventListener("click", () => {
    console.log("hola")
    localStorage.removeItem("login_success")
    window.location.href = "login.html"
})