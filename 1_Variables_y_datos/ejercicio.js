// Variables

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

var mascota1 = 'Pedrito';
var mascota2 = 'Rufo';
var mascota3 = 'Chancla';

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Las quiero mucho"

var mensaje = 'Mis mascotas son ' + mascota1 + ', ' + mascota2 + ' y ' + mascota3 + ' y las quiero mucho';
console.log(mensaje);

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// var masc1 = prompt('Escribe el nombre de la primera mascota');
// var masc2 = prompt('Escribe el nombre de la segunda mascota');

// "Quiero mucho a mis mascotas mascota1 y mascota2"

// console.log('Quiero mucho a mis mascotas: ' + masc1 + ' y ' + masc2 );


// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

var numero = '100';

// Muestra el contenido de esta variable en consola
console.log(numero);
// Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof numero);
// Transforma la variable de string a number

var numeroTransformado = parseInt(numero);

// Muestra nuevamente el contenido de esta variable en consola
console.log(numeroTransformado);

console.log(typeof numeroTransformado);

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?
