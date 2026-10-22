const numeros = [4, 2, 4, 7, 2, 9, 7, 10, 4];

let numerosNuevo = [];

for (let i = 0; i < numeros.length; i++) {
    let repetido = false;
    let yaExiste = false;

    // Comprobar si el número se repite en el arreglo original
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[i] === numeros[j] && i !== j) {
            repetido = true;
            break;
        }
    }

    // Comprobar si ya guardamos ese número
    for (let k = 0; k < numerosNuevo.length; k++) {
        if (numeros[i] === numerosNuevo[k]) {
            yaExiste = true;
            break;
        }
    }

    // Agregarlo solamente si se repite y aún no está guardado
    if (repetido && !yaExiste) {
        numerosNuevo.push(numeros[i]);
    }
}

console.log('Original:', numeros);
console.log('Números repetidos:', numerosNuevo);