// console.log('Condicionales');

var edad = prompt('Ingresa tu edad');
edad = Number(edad);
var locacion = '';
var genero = '';
if(edad >= 18) {
    locacion = prompt('Resides en un municipio fronterizo del Norte del país? S/N');
    genero = prompt('¿Cuál es tu género? H/M');
}
var embarazo = '';
if(genero === 'M' && edad >= 18) {
    embarazo = prompt('Actualmente te encuentras embarazada? S/N');
} 

// Definir de acuerdo a las variables si puedes ser vacunadx
if(edad >= 30 && embarazo === 'N' ) {
    console.log('MAYOR DE 30, sí puedes vacunarte');
} else if(edad >= 18 && genero === 'M' && embarazo === 'S') {
    console.log('EMBARAZADA, sí puedes vacunarte');
} else if(edad >= 18 && locacion === 'S') {
    console.log('FRONTERIZO, sí puedes vacunarte');
} else {
    console.log('no hay vacunas para ti');
}

// var mayorEdad = true;

// console.log(mayorEdad)

// if(mayorEdad) {
//     console.log('eres mayor de edad en México')
// }

// if(mayorEdad === true) {
//     console.log('eres mayor de edad en México')
// }

// if(!mayorEdad) {
//     console.log('NO ERES MAYOR DE EDAD')
// }

// if(mayorEdad === false) {
//     console.log('NO ERES MAYOR DE EDAD')
// }