function enviar() {
    if (validar()) {
        let Nombre = document.getElementById("Nombre");
        let Apellido = document.getElementById("Apellido");
        let Numero = document.getElementById("#Numero");
        let Correo = document.frm.Correo;
    let f_seleccion=
        let IncluirunaPagina = document.getElementById("IncluirunaPagina");
        let IncluirunMedio = document.getElementById("IncluirunMedio");
        let Informarunevento = document.getElementById("Informarunevento");
        let SolicitarPublicidad = document.getElementById("SolicitarPublicidad");
        let OTRO = document.getElementById("OTRO");



        let x=document.createElement("x");
        x.innerHTML= `${Nombre.value}  ${Apellido.value} nos estaremos comunicando a la brevedad al numero ${Numero.value} y/o al correo  ${Correo.value}    `

for(i=0;i<f_seleccion.length;i++){
    if(f_seleccion[i].checked){
        x.innerHTML += f_seleccion[i].value + "<br/>"
    }
}
document.getElementById("enviar").appendChild(x);
listaerrores_element.appendChild(x);


        alert("enviaste el formulario");
        return true;

    }
    return false;

}
function ver(e) {

}

function validar() {
    let Nombre = document.getElementById("Nombre");
    let Apellido = document.getElementById("Apellido");
    let Numero = document.getElementById("#Numero");
    let Correo = document.frm.Correo;

    let IncluirunaPagina = document.getElementById("IncluirunaPagina");
    let IncluirunMedio = document.getElementById("IncluirunMedio");
    let Informarunevento = document.getElementById("Informarunevento");
    let SolicitarPublicidad = document.getElementById("SolicitarPublicidad");
    let OTRO = document.getElementById("OTRO");

    let errores=[]; 
    let inputs = document.querySelectorAll("inputs");
    for(i=0;i<inputs.length;i++){
        inputs[i].style.border="revert";
    }

    console.log(Nombre.value);
    console.log(Apellido.value);
    console.log(Numero.value);
    console.log(Correo.value);
    console.log(Comentario.value);

    console.log(IncluirunaPagina.value);
    console.log(IncluirunMedio.value);
    console.log(Informarunevento.value);
    console.log(SolicitarPublicidad.value);
    console.log(OTRO.value);


    //verifico nombre
    if (Nombre.value.trim() == "") {
        console.log("no puede ser vacio el nombre");
        errores.push("no puede ser vacio el nombre");
        Nombre.style.border="2px solid red";

    } 
    //verifico Numero

    if (Numero.value.trim() == "" || isNaN(Numero.value.trim())) {
        console.log("debe poner un numero");
        errores.push("debe poner un numero");
        Numero.style.border="2px solid red";


    }

    //verifico Correo

    let mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // saco de internet codigo para verificar mail;
    if (!mail.test(Correo.value)) {
        console.log("debe ser un imail valido");
        errores.push("debe ser un imail valido");
        Correo.style.border="2px solid red";
    
    
    }
    // si esta chekeado
    if (!IncluirunaPagina.checked && !IncluirunMedio.checked && !Informarunevento.checked && !SolicitarPublicidad.checked && !OTRO.checked) {
        console.log("debe elegir al menos una opcion");
        errores.push("debe elegir al menos una opcion");
    
    }
    //chekeo
    
    let listaerrores_element= document.querySelector("#listaerrores");
    listaerrores_element.innerHTML="";


    errores.array.forEach(element => {
        let li=document.createElement("li");
        li.innerHTML=e;
        listaerrores_element.appendChild(li);
        console.log(element);
    });
    
    
    return errores.length == 0;
    
    
    
}



