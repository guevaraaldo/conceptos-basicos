const numeros = [4, 2, 4, 7, 2, 9, 7, 10];

let arrayNuevo = [];

for (let i = 0; i < numeros.length; i++) {

    let repetido = false;

    for (let d = 0; d < arrayNuevo.length; d++) {

        if (numeros[i] === arrayNuevo[d]) {
            repetido = true;
            break;
        }

    }

    if (!repetido) {
        arrayNuevo.push(numeros[i]);
    }

}

console.log("Números con duplicados:", numeros);
console.log("Números sin duplicados:", arrayNuevo);