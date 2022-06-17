console.log("Hello World");
'https://cdn.skypack.dev/speech-stream';

// NODE parece un array, funciona como un Array, pero amigo no es un Array

// getElementById
// Solamente nos debe traer 1 elemento
let pages = document.getElementById("pages")
// console.log(pages)

let listItems = document.getElementsByClassName("item")
// console.log(listItems)

for (let i = 0; i < listItems.length; i++) {
  // console.log(listItems[i])
}

let listaItemsByTagName = document.getElementsByTagName("li")
// console.log(listaItemsByTagName)

// metodos modernos
// querySelector
// ocupa la sintaxis que usamos en css
let pagesQuerySelector = document.querySelector("#pages")
// console.log(pagesQuerySelector)

let itemsQuerySelectorAll = document.querySelectorAll(".item")
// console.log(itemsQuerySelectorAll)

let itemsQuerySelectorTag = document.querySelectorAll("li")
// console.log(itemsQuerySelectorTag)

// forEach esto lo ocupamos para iterar un NodeList
itemsQuerySelectorTag.forEach(function(item){
  // console.log(item)
})

// CREANDO ELEMENTOS
// solamente lo crea en memoria
let spanTag = document.createElement('span')

spanTag.id = "elemento1"
// spanTag.style = "color: red; font-size: 1.5rem"

// existen metodos para saber si existe un atributo o no
// spanTag.name = "elemento"
// console.log(spanTag.hasAttribute("class"))
let ancla = document.querySelector("#ancla")
ancla.appendChild(spanTag)

spanTag.textContent = "Hola"
// spanTag.innerHTML = "<h1>DevF</h1>"

// let img = document.createElement("img")
// img.src = "https://lenguajejs.com/assets/logo.svg"
// img.alt="imagen de js"
// spanTag.remove()

// console.log(img)
// remplaza un elemento existente por uno nuevo
// ancla.replaceChild(img, spanTag)
//                  nuevo, viejo          

spanTag.classList.add("uno")
// spanTag.classList.remove("uno")

// addEventListener
// click, dogle click, 
let boton = document.getElementById("btn")
console.log(boton)
boton.addEventListener("click", function(e){
  // e todos los atributos del boton
  alert("Evento desde JS")
})

console.log(document)

