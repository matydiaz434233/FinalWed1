let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', mostrar);


function mostrar() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'LEER MENOS'
  }
  else {
    readMore_btn.innerHTML = 'LEER MAS'
  }
}


let botoncito2 = document.getElementById('botoncito2');
let boton2 = document.getElementById('boton2');

botoncito2.addEventListener('click', mostrar2);


function mostrar2() {
    boton2.classList.toggle('showText');

  if(boton2.classList.contains('showText')) {
    botoncito2.innerHTML = 'LEER MENOS'
  }
  else {
    botoncito2.innerHTML = 'LEER MAS'
  }
}



