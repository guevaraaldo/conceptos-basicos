const productos = [
    { nombre: "Mouse", precio: 500 },
    { nombre: "Teclado", precio: 1200 },
    { nombre: "Monitor", precio: 4500 },
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Webcam", precio: 1100 },
    { nombre: "Tablet", precio: 8000 }
];

let precioMayor = 0;
let segundoMayor = 0;

let nombreMayor = "";
let nombreSegundoMayor = "";

for (let i = 0; i < productos.length; i++) {

    if (productos[i].precio > precioMayor) {

        segundoMayor = precioMayor;
        nombreSegundoMayor = nombreMayor;

        precioMayor = productos[i].precio;
        nombreMayor = productos[i].nombre;

    } else if (productos[i].precio > segundoMayor) {

        segundoMayor = productos[i].precio;
        nombreSegundoMayor = productos[i].nombre;

    }

}

console.log("El segundo producto más caro es:", nombreSegundoMayor);
console.log("Precio:", segundoMayor);