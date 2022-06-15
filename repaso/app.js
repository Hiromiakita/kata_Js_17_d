function suma (num1, num2) { // <- son parámetros
    console.log(num1 + num2)
}

suma(1, 5)
suma(10, 4)

function elegirAlumno (numLista) { // <- son parámetros
    let alumnos = ['Luis', 'Juan', 'Diego', 'Ana'];
    console.log(alumnos[numLista]);
}

elegirAlumno(1)
elegirAlumno(3)

function saludar(nombre) {
    console.log('hola, ' + nombre);
}

saludar('Luis');
saludar('Julieta');


function retirar(posicionUsuario) {
    let cuentas = [
        { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
        { nombre: "Luis", saldo: 290, password: 'l33t' },
        { nombre: "Carlos", saldo: 67, password: '123' }
      ];

      console.log(cuentas[posicionUsuario].nombre)
}

retirar(0);
