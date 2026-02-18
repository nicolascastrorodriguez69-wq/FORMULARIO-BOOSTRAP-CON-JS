let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")

    usuario.addEventListener("input", function(evento){
    mensaje.classList.remove('text-danger', 'text-success');
    if (this.value ==  this.value.replace(/^[a-z]+$/)) {
        this.style.borderColor = "red"
        mensaje.textContent = "El usuario no es valido"
        mensaje.classList.add('text-danger')
    } else{
        this.style.borderColor = "green"
        mensaje.textContent = "El usuario es valido"
        mensaje.classList.add('text-success')
    }  
 })

let password = document.getElementById("password")
let requisito = document.getElementById("requisito")

    password.addEventListener("input", function(evento){
        requisito.classList.remove('text-danger', 'text-success');
    if (this.value.length < 10) {
        this.style.borderColor = "red"
        requisito.textContent = "La contraseña debe de tener minimo 10 carácteres"
        requisito.classList.add('text-danger')
    } else{
        this.style.borderColor = "green"
        requisito.textContent = "Tu contraseña es válida"
        requisito.classList.add('text-success')
    }
    })