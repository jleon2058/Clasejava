// function saludar(){
//     console.log('Hola a todos');
// }

// saludar();

// function suma(numero1,numero2){
//     return numero1+numero2;
// }

// console.log(suma(467,335));

const saludar = () => console.log('Hola a todos buen dia');

saludar();

const sumar = (numero1,numero2) => numero1 + numero2;

console.log(sumar(36, 25));

/* CALLBACKS */

const mostrartexto = (callback) => {
    console.log('Mensaje 1');
    callback;
}

const saludo = (nombre) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
    }, 3000)
}

mostrartexto(saludo('Marco'));