console.log("ciclos");

//for(valor inicial ; condición para que el ciclo continue ; aumento del iterador)

// for (let iterador = 5; iterador <= 20; iterador++) {
//     console.log("hola" + iterador);
// }

//Muestra los números del 1 al 10

// for(let i = 5; i <= 20; i++) {
//     console.log("valor actual del iterador: " + i);
// }

//1 x 2 = 2
//2 x 2 = 4
//3 x 2 = 6 
//.
//.
//10 x 2 = 20

//  uso de for para un array
let frutas = ['uva', 'jitomate', 'sandia', 'manzana'];
// index        0        1           2         3

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    // el frutas[i] es el elemento actual del array
    // el operador [] es para acceder a un elemento del array
    
}



// MAS SOBRE FOR

// for(let i = 0; i<= 10; i++) {
//     console.log(i * 5);
// }

// // nueva sintaxis para el for es el for of y su uso es para iterar sobre un arreglo
// let frutas = ['manzana', 'pera', 'uva', 'naranja'];
// for (frutas of frutas) {
//     console.log(frutas);
// }

// en este uso el nombre frutas es una variable que se va a usar para iterar sobre el arreglo
// y dentro del bloque de codigo se va a imprimir el valor de la variable frutas
