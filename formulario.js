console.log("Iniciando Javascript de formulario")

var formulario = document.getElementById("formulario")
var nombre = document.getElementById("Nombre")
var Apellido = document.getElementById("Apellido")
var Numero = document.getElementById("Numero")
var Correo = document.getElementById("Correo")
var Comentario = document.getElementById("Comentario")
//declaro las funciones
var datos;
var conjunto = [];
var mostrarDatos = document.getElementById("muestrodato");
formulario.onsubmit = () => onSubmit()

function onSubmit() {
    datos = {
        Nombre: Nombre.value,
        Apellido: Apellido.value,
        Numero: Numero.value,
        Correo: Correo.value,
        Comentario: Comentario.value,
    }
    //---------------------------------------------------------------------------------------------------
    if (validar()) {
        conjunto.push(datos)
        verDatos();
        formulario.reset()
        
    }
    return false
}

function validar() {
    let cont = 0;
    
    //validacion de nombre cpm cambios de Estilo si hay un Error
    if (datos.nombre != "") {
        cont++;
        nombre.style.border= "1px solid rgb(2, 184, 120)"
        nombre.style.backgroundColor = "rgb(175, 248, 222)"
    } else {
        nombre.style.border= "1px solid red"
        nombre.style.backgroundColor = "rgb(224, 125, 125)"
        mostarErrores()
        nombre.focus();
    }
    //validacion de seleccion ( Siempre estara validado, porque es un Select por defecto en "Saludo")
    if (datos.seleccion != "") {
        cont++;
    } 
    //validacion del mensaje
    if (datos.seleccion == "Sugerencia" && datos.mensaje !="") {
        mensaje.style.border= "1px solid rgb(2, 184, 120)"
        mensaje.style.backgroundColor = "rgb(175, 248, 222)"
        cont++;
    } else if(datos.seleccion == "Saludo"){
        cont++;
    } else{
        mensaje.style.border= "1px solid red"
        mensaje.style.backgroundColor = "rgb(224, 125, 125)"
        mensaje.focus();
    }
    //Validacion de 200 caracteres
    if (datos.mensaje.length <= 200) {
        cont++;
        
    } else {
        mensaje.style.border= "1px solid red"
        mensaje.focus();
        
    }
    
    //Valida el Contandor
    if (cont == 4) {
        return true;
    } else {
        return false;
     }
    //Otra forma de escribir el return como verdadero: *return cont == 4 

}

function verDatos(){
    //limpia el appendChild
    mostrarDatos.innerHTML = ""
    let dat;
    
    //----------------------------------------------------------------------------------------------------
    bolsita.forEach(aux=>{
        dat = document.createElement("div")
        dat.className = "divresultado2"
          //Evaluar respuestas del div <mostrarDatos>
    if(aux.seleccion == "Saludo" && aux.mensaje ==""){
        dat.innerHTML = "<p>"+aux.nombre + " deja un saludo!"+"</p>"
        mostrarDatos.appendChild(dat)
    }else if (aux.seleccion == "Saludo" && aux.mensaje != ""){
        dat.innerHTML = "<p>"+aux.nombre + " deja un saludo con mensaje: "+ aux.mensaje +"</p>"
        mostrarDatos.appendChild(dat)
    }else{
        dat.innerHTML = "<p>"+aux.nombre + " deja una sugerencia con mensaje: "+ aux.mensaje +"</p>"
        mostrarDatos.appendChild(dat)
    }
    })
}


