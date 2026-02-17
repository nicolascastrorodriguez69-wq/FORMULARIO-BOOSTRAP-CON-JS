let usuario = document.getElementById("usuario")

 usuario.addEventListener("input", function(evento){
    this.border = "2px solid"
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
