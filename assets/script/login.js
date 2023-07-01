const user = document.getElementById("usuario");
const pass = document.getElementById("contraseña");

form.addEventListener("submit", async (e) => {
    
    e.preventDefault();
    let warnings = "";
    let regexUsuario = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&{}()[\]^<>\\|_~.'"#,])([A-Za-z\d@$!%*?&{}()[\]^<>\\|_~.'"#,]){8,}$/;
    let entrar = false;
    

    if(user.value.length < 4 || !regexUsuario.test(user.value)){
        warnings = 'El usuario no es válido';
        entrar = true;
    }

    if(pass.value.length < 8){
        warnings = 'Usuario o Contraseña incorrecta';
        entrar = true;
    }else if(!regexPassword.test(pass.value)){
        warnings = 'Usuario o Contraseña incorrecta';
        entrar = true;
    }

    if(entrar){
        Swal.fire({
            position: "center",
            icon: "error",
            title: warnings,
            showConfirmButton: false,
            timer: 1500,
          });
    }else{
        const usuario = user.value;
        const password = pass.value;

        await fetch(`http://127.0.0.1:3000/personas/${usuario}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message){
                    warnings = `Usuario o Contraseña incorrecto`;
                }else{
                    if(usuario == data.usuario && password == data.contraseña){
                        Swal.fire({
                            //luego de copiar aparece un pop up de exito
                            position: "center",
                            icon: "success",
                            title: "Acceso Concedido!",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                            setTimeout(() => {
                                window.location.href = "dash_board.html";
                            }, 2500);
                    }else{
                        warnings = `Usuario o Contraseña incorrecta`;
                    } 
                }
            if(warnings != ""){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: warnings,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            })    
    }
});