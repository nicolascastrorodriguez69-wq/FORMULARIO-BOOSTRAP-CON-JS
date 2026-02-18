let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")
let intentos = 0;

    usuario.addEventListener("input", function(evento){
    mensaje.classList.remove('text-danger', 'text-success');

    // Ciclo verificar caracteres

    if (/[^a-zA-Z0-9._-]/.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z0-9._-]/g, '');
        this.style.borderColor = "green"
        mensaje.textContent = "El usuario es valido"
        mensaje.classList.add('text-success')
    } else{
        this.style.borderColor = "green"
        mensaje.textContent = "El usuario es valido"
        mensaje.classList.add('text-success')
    }

    //Ciclo verificar cantidad caracteres
    if (this.value.length < 3) {
        this.style.borderColor = "red"
        mensaje.textContent = "El usuario debe de tener minimo 3 caracteres"
        mensaje.classList.add('text-danger')
    } 
 })

    //Ciclo verificar cantidad de caracteres

let password = document.getElementById("password")
let requisito = document.getElementById("requisito")
let boton = document.getElementById("alternarbtn")
let contador = document.getElementById("contador")

    password.addEventListener("input", function(evento){
        //esto actualiza el contador de una vez
        contador.textContent = this.value.length;
        //esto me mira la seguridad
        let numeros = /\d/.test(this.value);
        let simbolos = /[!@#$%^&*]/.test(this.value)
        requisito.classList.remove('text-danger', 'text-warning', 'text-success');
    if (this.value.length < 10) {
        this.style.borderColor = "red"
        requisito.textContent = "La contraseña debe de tener minimo 10 carácteres | Contraseña debil"
        requisito.classList.add('text-danger')
    } else if(!numeros || !simbolos){
        this.style.borderColor = "orange"
        requisito.textContent = "Error: Faltan simbolos o numeros | Contraseña intermedia"
        requisito.classList.add('text-warning')
    } else{
        this.style.borderColor = "green"
        requisito.textContent = "Tu contraseña es válida | Contraseña Valida"
        requisito.classList.add('text-success')
    }
    })  

    //Boton de ocultar y mostrar

    boton.addEventListener("click", function(evento){
        if(password.type === "password") {
            password.type = "text";
            this.textContent = "Ocultar contraseña";
        } else{
            password.type = "password";
            this.textContent = "Mostrar contraseña";
        }
    })

    //Aca va los intentos de contraseña
enviarbtn.addEventListener("click", function(evento){
    if (!mensaje.classList.contains("text-success") || !requisito.classList.contains("text-success")) {
        if (!mensaje.classList.contains("text-success")) {
            mensaje.textContent = "Error: El nombre de usuario no es válido";
            mensaje.classList.add('text-danger');
            usuario.style.borderColor = "red";
        }
        
        intentos++;
        if(intentos >= 3) {
            usuario.disabled = true; password.disabled = true; enviarbtn.disabled = true;
            let tiempo = 30;
            let cronometro = setInterval(function(){
                tiempo--;
                document.getElementById("bloqueo").textContent = "Bloqueado. Espera " + tiempo +  "s para volver a tener 3 oportunidades";
                if (tiempo <= 0){
                    clearInterval(cronometro);
                    usuario.disabled = false; password.disabled = false; enviarbtn.disabled = false;
                    document.getElementById("bloqueo").textContent = "";
                    intentos = 0;
                }
            }, 1000);
        } else {
            document.getElementById("bloqueo").textContent = "Error: intento " + intentos + " de 3";
        }
        return; 
    }

    let usuvalido = mensaje.classList.contains("text-success");
    let pasvalido = requisito.classList.contains("text-success");

    if(usuvalido && pasvalido) {
        mensaje.textContent = "Se ha enviado correctamente";
        mensaje.className = "text-success";

        usuario.value=""; password.value="";
        usuario.style.borderColor=""; password.style.borderColor="";
        contador.textContent = "0"; requisito.textContent = "";
        intentos = 0;      
    }
})
