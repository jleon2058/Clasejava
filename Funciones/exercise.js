//Programar una funcion que solicite al usuario ingresar un texto ademas contar el numero de carateres del texto ingresado

// let carater
// const contarcaracter = (carater) => carater.length

// console.log(contarcaracter("Jose"))

const getString = () => {
    //let mensaje = `la cadena ingresada tiene ${cadena.length} caracteres`
    //console.log(mensaje);

    let cadena = prompt('Ingrese un texto');
    console.log(cadena);

    if (cadena!='' && cadena!= null){
        alert(`la cadena ingresada tiene ${cadena.length} caracteres`);
    }else{
        alert('Ingrese un texto por favor para mostrar los datos');

    }
}
 
getString();