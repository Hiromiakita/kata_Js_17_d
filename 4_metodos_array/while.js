// console.log('hola');
// tema: ciclo while
// let nuevoArray = ['1', '2'];
// [('4', '4')].length;
// cuando es bueno ocupar el while: 
// cuando estemos seguros de que la condicion se cumpla
let contador = 0;
while (contador < 5) {
  //   el codigo que se va ajecutar mienstra el while sea true
  console.log(contador, 'hola');
  // contador = contador + 1;
  contador++;
}


let contador2 = 0;
do {
  //   se ejecuta lo que esta dentro de este bloque mientras el while se true
  // contador = contador + 1;
  console.log(contador2);
} while (contador2 < 5);


// operador ! Logical not
// crea una contradiccion

let estaLLoviendo = false;
console.log(!!estaLLoviendo);


// Ejemplo #2
// Guarda un arreglo de valores introducidos
// Si el usuario no introduce un valor, termina el ciclo.
var arreglo = [];
var userInput;
while (!(userInput=="")) {
  userInput = prompt("Ingresa cualquier carácter");
  arreglo.push(userInput);
}
console.log("Introduciste estos valores: " + arreglo);


