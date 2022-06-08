let frutas = ['uva', 'jitomate', 'sandia'];
// index        0         1          2

// console.log(frutas[3]);

// este operador indica la posicion donde quiero añaidir el nuevo elemento. OJO puede remplazar lo que ya este en esa posicion
// frutas[0] = 'melon';

// añadir un elemento al final del array
// frutas.push('jicama');
// frutas.push('fresa');
// frutas.push('pera');
// frutas.push('manzana');
// frutas.push('kiwi');

// console.log(frutas);

// pop
// frutas.pop();
// mutar el array

// funcion donde en ultimo elemento de un array

// let ultimoElemento = frutas.pop();

// metodo = funcion

// console.log(ultimoElemento, 'hola soy el ultimo elemento');

// let frutas = ['uva', 'jitomate', 'sandia'];
// index        0         1          2
// index != lenght
// total de elementos de un array

frutas.length;

console.log(frutas);
// console.log(history);


// let frutas = ['uva', 'jitomate', 'sandia', 'manzana'];
// // index        0        1           2         3

// metodo unshift
// añadir un nuevo elemento al principio de la lista
// frutas.unshift('Mandarina');
// console.log(frutas);

// split crear un array, apartir de un objeto iterable.
// un objeto iterable es el que se puede recorrer

// let listaSuper = 'Cebolla, Perejil, Tomate, Calabaza';
// let listaSuperArray = listaSuper.split(' ');

// console.log(listaSuperArray);
// slice
// dos parametros start, end
// truncar el array

// console.log(frutas, 'array original');
// let nuevaLista = frutas.slice(1, 3);
// console.log(nuevaLista);
// let frutas = ['uva', 'jitomate', 'sandia', 'manzana'];
// // index        0        1           2         3

// // metodo splice
// frutas.splice(1, 2, 'naranaja', 'toronja', 'lima');
// console.log(frutas);

// // metodo sort
// let frutasSort = frutas.sort();
// // console.log(frutasSort);

// // callback, es una funcion dentro de otra funcion

// let numeros = [1, 6, 8, 46, 5, 7, 180, 18];
// let numerosSort = numeros.sort((a, b) => a - b);
// // current = Actual , next = siguente
// console.log(numerosSort);

// let frutas = ['uva', 'jitomate', 'sandia', 'manzana'];
// index        0        1           2         3
// reverse muta el array original OJO!!!
console.log(frutas, 'original');
frutas.reverse();
console.log(frutas, 'reverse');

let verduras = ['cebolla', 'cilantro', 'perijil'];
// concat juntar o unir
//

let listaSaludable = frutas.concat(verduras);
console.log(listaSaludable);
let proteina = ['pollito', 'pescado'];

// operador spread operator ... tres puntos es el spread
let listaSaludable2 = [...frutas, ...verduras, ...proteina];
console.log(listaSaludable2);