// let exchange = prompt('Ingresa MXN y te devolvemos dolares')
// let mxn = 300;

// function change(a) {
//   let dolarPrice = 19.59;
//   let dollars = a / dolarPrice;
// 	// alert(dollars)
//   return dollars;
// }

// console.log(change(mxn))

// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a hacer un algoritmo que haga esto por el?

// function imprimirNumeros(){
//   for (let i = 2; i <= 100; i+=2)
//     console.log(i)
// }

// imprimirNumeros()
// counter
// let numeroPar = 1;

// for(i = 0; i <= 100; i++){
//   // usar siempre el triple igual
// if (numeroPar % 2 === 0){
//     console.log(numeroPar)
// }
//   numeroPar++
// }


// Escribir todos los números que terminan en 0 y estén entre 2 y 121
// function imprimirNumeros(){
//   for (let i = 10; i <= 121; i+=10)
//     console.log(i)
// }

// imprimirNumeros()


// // let numeroPar = 10;
// for(i = 2; i < 121; i++){
//   // usar siempre el triple igual
// if (i % 10 === 0){
//     console.log(i)
//  }  
// }

// let calificaciones = [10, 6, 8, 6, 5]
//                              0   1  2  3  4  
// // // accumulador
// let sumaCalificaciones = 0
// for (let i = 0; i < calificaciones.length; i ++){
//   sumaCalificaciones = sumaCalificaciones +  calificaciones[i]
// }

// console.log(`la calificacion de Joel es: ${sumaCalificaciones / calificaciones.length}`)
// console.log('la calificacion es: '+ '  ' + sumaCalificaciones / calificaciones.length)

// let calificaciones = [10, 8, 10, 9, 9]
// let calificaciones = [2, 2, 2, 2, 2];
// let promedio = 0; 
// for(i = 0; i < calificaciones.length; i++){
//   console.log(i)
//     promedio = promedio + calificaciones[i];
// }
// console.log(promedio)
// console.log(promedio / calificaciones.length)



//Hacer una función que cuente el número de caracteres de una palabra
// function contadorPalabras (palabra){
//   if (typeof palabra  !== 'string') {
//     return 'Tienes que ingresar una palabra'
//   }
//   // para javascript un sting es un objeto iterable
//   let numeroDePalabras = palabra.length
//   return numeroDePalabras
// }

// console.log(contadorPalabras(10))
//Hacer una función que halle el máximo entre dos números
// function maximoEntroNumeros () {

// }

// podemos usar Math.min y Math.max
// function Maximo2Num(a, b){
//   let respuesta;
//   if(a < b){
//       respuesta = a + ' Es menor que: ' + b;
//       return respuesta; 
//   } else if(a > b){
//       respuesta = a + ' Es mayor que: ' + b;
//       return respuesta; 
//   }else if(a === b){
//       respuesta = a + ' Es igual que: ' + b;
//       return respuesta; 
//   }
// }
// console.log(Maximo2Num(9, 7));

//Hacer una función que halle el máximo entre tres números


// Hacer una función para ingresar cualquier letra del alfabeto  
// y verifique si es vocal o consonante

// function verificarLetra(letra) {
//   let vocales = ['a', 'e', 'i', 'o', 'u']
//   let letraMinuscula = letra.toLowerCase()
//   if (vocales.includes(letraMinuscula)){
//      return `La letra ${letra} es una vocal`
//   } else {
//     return `La letra ${letra} es una consonante`
//   }
// }

// console.log(verificarLetra('e'))

//  Hacer una función que verifique si un número es positivo o negativo
// function num(a) {
//   if (a > 0) {
//       return "positivo"
//   } else if (a == 0) {
//       return "Es igual a 0"
//   } else {
//       return "negativo"
//   }10
// }

// var numero = prompt("Ingresa tu numero")
// console.log(num(numero))

// //Hacer una función que halle la suma de todos los números naturales entre 1 y n
// // factorial
// function factorial(a) {

//   if (typeof Number(a) !== 'number'){
//     return 'Esto es un string'
//   }

//   let resul = 0

//   for (let i = 1; i <= a; i++) {
//       resul =  resul +i
//   }
//   return resul
// }

// var num = prompt("Numeros a sumar")
// console.log(factorial(num))
 



// <h3>10</h3>
// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let randomArreglo = [4,'dos',8,'tres',5,9,1,'cero']

function typeofArrego(arreglo) {

  let numeros = []

  for (let i = 0; i < arreglo.length; i++){    
      if (typeof arreglo[i] === 'number') {
        numeros.push(arreglo[i])
      }
    }   
     return numeros
  }

  
  {/* <h3>9</h3>
  Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
  https://pastebin.com/Zzk8g7Z6 */}
console.log(typeofArrego(randomArreglo))

let pokemonesArray = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb'
]

  function pokemonesNumero(n) {

    // el numero ingresado por el usuario no debe ser mayor al array 

    // guardar los resultados en otro array y retornarlo


    for (let i = 1; i <= n; i++ ){
      if (i % 5 === 0) {
        console.log(pokemonesArray[i])
      }
    }
  }

  console.log(pokemonesNumero(100))