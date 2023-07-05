
contraseñaGenerada = document.getElementById("contraseña-generada");
copiarContraseña = document.getElementById("copiar-contraseña");
longitudContraseña = document.getElementById("longitud-contraseña");
incrementarRango = document.getElementById("incrementar-rango");
disminuirRango = document.getElementById("disminuir-rango");
inputLongitud = document.getElementById("longitud");
inputMayusculas = document.getElementById("mayusculas");
inputMinusculas = document.getElementById("minusculas");
inputNumeros= document.getElementById("numeros");
inputSimbolos = document.getElementById("simbolos");
botonGenerar = document.getElementById("boton-generar");



mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
minusculas = "abcdefghijklmnopqrstuvwxyz";
numeros = "0123456789"
simbolos = "!@#$%&*()_+=";



incrementarRango.addEventListener("click", function incrementarUno(){
    inputLongitud.value = parseInt(inputLongitud.value) + 1;
    longitudContraseña.textContent = inputLongitud.value;
});

disminuirRango.addEventListener("click", function disminuirUno(){
    inputLongitud.value = parseInt(inputLongitud.value) - 1;
    longitudContraseña.textContent = inputLongitud.value;
});


function mostrarCantidad(valor){
    longitudContraseña.textContent = valor;
}


function numeroAleatorio(maximo){
    return Math.floor(Math.random() * maximo)
}



function obtenerMayuscula(){
    return mayusculas[numeroAleatorio(mayusculas.length)];
}

function obtenerMinuscula(){
    return minusculas[numeroAleatorio(minusculas.length)];
}

function obtenerNumeros(){
    return numeros[numeroAleatorio(numeros.length)];
}

function obtenerSimbolos(){
    return simbolos[numeroAleatorio(simbolos.length)];
}



let contraseñaNueva = '';

botonGenerar.addEventListener("click", function generarContraseña(e){
    
    contraseñaNueva = '';

    if(inputMayusculas.checked){
        contraseñaNueva += obtenerMayuscula();
    }if(inputMinusculas.checked){
        contraseñaNueva += obtenerMinuscula();
    }if(inputNumeros.checked){
        contraseñaNueva += obtenerNumeros();
    }if(inputSimbolos.checked){
        contraseñaNueva += obtenerSimbolos();
    }

    if (inputMayusculas.checked || inputMinusculas.checked || inputNumeros.checked || inputSimbolos.checked) {
        rellenarContraseña();
    }

    
    contraseñaGenerada.textContent = contraseñaNueva;


    if(checkboxDestildados()){
        mostrarError()
    }

})

function rellenarContraseña(){
    while(contraseñaNueva.length < parseInt(longitudContraseña.textContent)){
        const aleatorio = caracterAleatorio();

        if(inputMayusculas.checked && aleatorio === 0){
            contraseñaNueva += obtenerMayuscula();
        }if(inputMinusculas.checked && aleatorio === 1){
            contraseñaNueva += obtenerMinuscula();
        }if(inputNumeros.checked && aleatorio === 2){
            contraseñaNueva += obtenerNumeros();
        }if(inputSimbolos.checked && aleatorio === 3){
            contraseñaNueva += obtenerSimbolos();
        }
    }

    
}

function caracterAleatorio(){
    return Math.floor(Math.random() * 4)
}



copiarContraseña.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = contraseñaNueva;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
})



function checkboxDestildados(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        return false;
      }
    }
    return true;
  }

 

function mostrarError(){
    const divError = document.querySelector("#error");
    const parrafoError = document.createElement('p');
    parrafoError.innerText = "Por favor selecciona alguna de las opciones de caracteres para crear tu contraseña";
    divError.appendChild(parrafoError);
    parrafoError.classList.add("error")

    setTimeout(() => {
        parrafoError.remove();
      }, 3000);
}