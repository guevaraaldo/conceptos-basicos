const productos = [
    { nombre: "Mouse", precio: 500 },
    { nombre: "Teclado", precio: 1200 },
    { nombre: "Monitor", precio: 4500 },
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Webcam", precio: 1100 }
];

let precioMayor = 0;
let nombre = '';

for (let i = 0; i < productos.length; i++) {
    if (precioMayor < productos[i].precio) {
        precioMayor = productos[i].precio;
        nombre = productos[i].nombre;
    }
}

console.log("El producto más caro es:", nombre)
console.log("Precio:", precioMayor);