//define una variable para el formulario de login
const formulario = document.querySelector("#login_form")

//escucha el evento submit del formulario de login
formulario.addEventListener("submit", (e) => {
    //previene que al submitear se recargue la página
    e.preventDefault()

    //define constantes para cada campo del formulario
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    //define un array que obtiene su valor del local storage,
    //en caso de que no exista, se le da un array vacío
    const users = JSON.parse(localStorage.getItem("users")) || []

    //busca si existe un mail y una pass en el array que coincida con lo que puso el usuario
    const validUser = users.find(user => user.mail === email && user.pass === password)

    //si es false, da una alerta
    if (!validUser) {
        return alert("Incorrecto")
    }

    //si es true, añade el item "login_success" al  array
    localStorage.setItem("login_success", JSON.stringify("users"))

    //redirecciona al usuario a la página
    window.location.href = "index.html"
})