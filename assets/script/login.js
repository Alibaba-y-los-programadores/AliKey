
const user = document.getElementById("usuario");
const pass = document.getElementById("contraseña");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", async (e) => {
    
    e.preventDefault();
    let warnings = "";
    let regexUsuario = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&{}()[\]^<>\\|_~.'"#,])([A-Za-z\d@$!%*?&{}()[\]^<>\\|_~.'"#,]){8,}$/;
    parrafo.innerHTML = "";
    let entrar = false;
    

    if(user.value.length < 4 || !regexUsuario.test(user.value)){
        warnings += 'El usuario no es válido<br>';
        entrar = true;
    }

    if(pass.value.length < 8){
        warnings += 'Usuario o Contraseña incorrecta<br>';
        entrar = true;
    }else if(!regexPassword.test(pass.value)){
        warnings += 'Usuario o Contraseña incorrecta<br>';
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Login Aceptado!<br> Buscando en DB...";
        const usuario = user.value;
        const password = pass.value;

        await fetch(`http://127.0.0.1:3000/personas/${usuario}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message){
                    warnings = `Usuario o Contraseña incorrecto`;
                }else{
                    if(usuario == data.usuario && password == data.contraseña){
                        warnings = `Nombre: ${data.nombre} <br>Apellido: ${data.apellido}`
                    }else{
                        warnings = `Usuario o Contraseña incorrecta`;
                    }
                    
                }
            })
        parrafo.innerHTML = warnings;
    }
});