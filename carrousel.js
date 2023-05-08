const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0
alert("si nesecitas adermicina preciona aceptar")
alert("RIVER 1 - boca 0")


const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    unmount()
    if(index >= slider_content.length - 7){
        index = 0
    }
    else {
        index++
    }
    mount()
})

prev.addEventListener('click', () => {
    unmount()
    if(index <= 0){
        index = slider_content.length - 7
    }
    else {
        index--
    }
    mount()
})




mount()


// carrousel   dos

const slider_content1 = document.querySelectorAll('.slider_content1')
const siguiente = document.querySelector('.siguiente')
const previo = document.querySelector('.previo')
let indice = 0


const mount1 = () => slider_content1[indice].classList.add('active')
const unmount1 = () => slider_content1[indice].classList.remove('active')
siguiente.addEventListener('click', () => {
    unmount1()
    if(indice >= slider_content1.length - 1){
        indice = 0
    }
    else {
        indice++
    }
    mount1()
})

previo.addEventListener('click', () => {
    unmount1()
    if(indice <= 0){
        indice = slider_content1.length - 1
    }
    else {
        indice--
    }
    mount1()
})




mount1()
