console.log("Visualice la consola aqui, javascript cargado")
//traigo las Variables
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var correo = document.getElementById("correo");
var errorMensaje = document.getElementsByClassName("error");
var regularMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var resultado = document.getElementById("resultado");
var arreglo = [];

//Funciones
formulario.onsubmit = () => onSubmit()

function onSubmit() {
    datos = {
        nombre: nombre.value,
        correo: correo.value,
        edad: edad.value,
    }
    if (validar()) {
        arreglo.push(datos)
        console.log(arreglo)
        verDatos()
        formulario.reset()
    }
    alert("Desea enviar el formulario???");
    return false;
}

function validar() {
    let numero = parseInt(edad.value);
    let cont = 0;
    if ((datos.nombre != "") && (datos.nombre.length < 21)) {
        console.log(datos.nombre.length)
        correcto(nombre, 0);
        cont++;
    } else {
        error(nombre, 0);
        nombre.focus();
    }
    if (datos.edad != "") {
        if (Number.isInteger(numero)) {
            if ((numero > 17) && (numero < 100)) {
                correcto(edad, 1);
                cont++;
            } else {
                error(edad, 1);
                edad.focus();
            }
        }
    } else {
        error(edad, 1);
        edad.focus();
    }
    if (regularMail.test(datos.correo)) {
        correcto(correo, 2);
        cont++;
    } else {
        error(correo, 2);
        correo.focus();
    }
    //contador de Validacion
    if (cont == 3) {
        return true;
    } else {
        return false;
    }
}

function correcto(elemento, posicion) {
    elemento.classList.remove("bordeRojo")
    elemento.classList.add("bordeVerde");
    errorMensaje[posicion].innerHTML = "";

}

function error(elemento, posicion) {
    elemento.classList.add("bordeRojo");
    if (posicion == 0) {
        errorMensaje[posicion].innerHTML = "Error. Debe ingresar un nombre hasta 20 chars";
    } else if (posicion == 2) {
        errorMensaje[posicion].innerHTML = "Error. Falta el Correo";
    } else {
        errorMensaje[posicion].innerHTML = "Error. Debe ingresar una edad entre 18 y 99 años."
    }
}
function verDatos() {
    //limpia el appendChild
    resultado.innerHTML = ""
    let dat;
    arreglo.forEach(aux => {
        dat = document.createElement("div")
        dat.className = "resultado1"
        dat.innerHTML = "<p>" + aux.nombre + " de " + aux.edad + " años, nos contactaremos a la brevedad al email: " + aux.correo + "</p>"
        resultado.appendChild(dat)
    })
}
