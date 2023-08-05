//crea una variable para el formulario de registro
const signUpForm = document.querySelector("#signup")

//escucha el evento submit del formulario de registro
signUpForm.addEventListener("submit", (e) => {
    //previene que al submitear se recargue la página
    e.preventDefault()

    //defino una variable para cada campo del registro
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
    //defino un array que obtiene su valor del local storage
    //en caso de que no haya un valor, se queda vacío
    const users = JSON.parse(localStorage.getItem("users")) || []

    //verifica si existe un valor igual a lo que el usuario ingresó en el array
    const isUserRegistered = users.find(user => user.email === email)

    //si ya existe un valor, la función retorna una alerta
    if (isUserRegistered) {
        return alert("Usuario registrado")
    }

    //en su defecto, se agregan los valores del registro al array
    users.push({name: username, mail: email, pass: password})

    //guarda el array en el local storage
    localStorage.setItem("users", JSON.stringify(users))

    //redirige al usuario a la página de login
    window.location.href = "login.html"
})