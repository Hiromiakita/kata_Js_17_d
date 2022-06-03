console.log('operadores')

// operadores matemáticos
// +
// concatenar
// template string (ECMA16), coma operador
// console.log("hola" + " "  + 'como estas')
// console.log("hola", 'como estas')

// para cambiar tipo de una variable
// var noEsunNumero = '10'
// // tipo string
// console.log(typeof noEsunNumero)

// let numero = +noEsunNumero
// // tipo numero
// console.log(typeof numero)

// let numero = 'pepito'
// console.log(+numero)
// console.log(10 + 20)

// console.log('20' * '5')

// console.log(10 % 2)
// var noEsunNumero = '10'
// let numero = +noEsunNumero
// let numero2 = Number(noEsunNumero)

// let numero1 = 10
// let numero2 = 10
// console.log(numero1 >= numero2)

// = operador de asignacion
// let numero = 10
// let numero1 = 10
// let numero2 = '10'

// operador igual que == 
// nuevo javascript usamos el triple igual
// console.log(numero1 == numero2)

// // con triple igual ************
// console.log(numero1 === numero2)

// operador de distinto que !== 
// console.log(numero1 !== numero2)

// la variable estsa decladara pero no tienen ningun valor
// let saludo
// console.log(saludo)

// // null se asigna a una variable que intencionalmente se le agrega este valor
// // 
// let mensajes = null
// console.log(mensajes)
// console.log(undefined === null)

// var y let 
// var numero = 10

// console.log(numero)

// var numero = 20

// console.log(numero)

// let numero1 = 10
// let numero2 = '100'
// console.log(numero1 = numero2)
// console.log(numero1)

// operador de asignacion matemática
// let numero = 10

// console.log(numero += 2)

// // ejemplo de tempate string
// console.log('el nuevo numero es' + ' ' + numero)
// console.log(`el nuevo numero es ${numero}`)
// alt + 96

// evulua si el valor de una variable es true o false
//  operador and &&
// let mensajes = false
// let noticias = false
// let memes = true
// console.log(mensajes && noticias)

// operador or ||
//  retorna un true si alguna de las dos condiciones es verdadera
// console.log(mensajes || noticias || memes)
// console.log(0)
// let mensajes = 0
// let numeroDeMensajes = mensajes || 'no hay mensajes'
// console.log(numeroDeMensajes)

// que bloque
// lo definimos por los corchetes {} el bloque de ejecucion
// bloque if

// if (codicion) {
//   // dentro de el bloque if y este de aqui se ejecuta si la codicion es verdadera
// }

// else 

// aqui puedo ocupar un operador ternario
// if (10 < 5) {
//   console.log('es verdadero')
// } else {  
//   console.log('es falso')
// }

//  else if 
// let numero1 = 10
// let numero2 =  20
// let numero3 = 3

// if (numero1 < numero2) {
//   console.log(`el numero ${numero1} es menor al numero ${numero2} `)
// } else if (numero2 === numero3) {
//   console.log(`el numero ${numero2} es igual al numero ${numero3} `)
// } else {
//   console.log('nada es verdad')
// }

// console.log(Number('10'))
// console.log(Boolean(10 === 10))
// console.log(10 === 10)

// Falsy
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(NaN))

// verdadero
console.log(Boolean(' '))
console.log(Boolean(0))
console.log(Boolean([]))

let numero
console.log(numero)
if (numero) {
  console.log('es verdadero')
} else {
  console.log('es falso')
}



// Diferenccia entre == y ===

console.log(5 == 5) // true
console.log(5 == '5') // true
console.log(5 === '5') // false