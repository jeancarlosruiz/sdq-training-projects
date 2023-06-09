'use strict'

const btn = document.querySelector('.btn')
const bgColor = document.querySelectorAll('.color')
const text =  document.querySelectorAll('span')

// Se genera un color aleatorio para el fondo
const differentBackground = () =>{
    // Se recorre el array de colores y se le asigna el color aleatorio
    bgColor.forEach((item) =>{
        // Se le asigna el color aleatorio al fondo
        item.style.backgroundColor = getRamdonColor()
        // Se le asigna el nombre del color aleatorio al texto
        text.forEach(item =>{
            item.textContent = getRamdonColor()
        })
    })
}

const getRamdonColor = () =>{
    // characters contiene todos los caracteres que se pueden usar para generar un color hexadecimal
    const characters = '0123456789ABCDEF'
    // color es el color que se va a generar
    let color = '#'

    // Se genera un color hexadecimal de 6 caracteres
    for(let i = 0; i < 6; i++){
        color += characters[Math.floor(Math.random() * 16)]
    }

    // Se retorna el color generado
    return color
}

// Se llama a la función para que se ejecute al cargar la página
differentBackground()

// Se le asigna el evento click al botón
btn.addEventListener('click',differentBackground)