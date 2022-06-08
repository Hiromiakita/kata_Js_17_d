// console.log(10 + 20);
// scope esta limitado por ambito local y global y el ambito local lo limitan las llaves

let numero1 = 750;

// se ocupa la palabra reservada function seguido del nombre de la funcion
function Suma(a, b) {
  //   scope local a y b
  // a y b son variables locales a la funcion
  console.log(numero1, 'ambito local');
  let suma = a + b;
  // console.log(suma);
  //   todas las funciones requieren tener una salida
  //   super importante

  return suma;
}

// para unicializar una funcion necessitamos llamarla y pasarle los parametros
// podemos ejecutarla las veces que queramos
Suma(numero1, 20);
// Suma(10, 80);
// Suma(10, 40);
// Suma(10, 750);