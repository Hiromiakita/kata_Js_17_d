
// var vs let vs const

// Js Vanilla
var nombre = 'Julio'; // Declara variables que existen en todo el programa y ocupan mucha memoria
// Ecma Script 

let apellido = 'López'; // Las variables existen sólo donde las declaras
apellido = 'Rodriguez'; // Se pueden sobreescribir

const edad = 50; 
// edad = 100; //ERROR -> No se puede sobreescribir una constante

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Acceder a propiedades de un objeto
let info = {
    nombre: 'Sergio',
    edad: 20,
    ciudad: 'CDMX',
    tel: 33333,
}

console.log(info);
console.log(info.nombre);
console.log(info.tel);
console.log(info.edad + info.tel);