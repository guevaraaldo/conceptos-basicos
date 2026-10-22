const productos = [
    { nombre: "Laptop", categoria: "Tecnología", precio: 15000 },
    { nombre: "Mouse", categoria: "Tecnología", precio: 500 },
    { nombre: "Silla", categoria: "Muebles", precio: 2500 },
    { nombre: "Teclado", categoria: "Tecnología", precio: 1200 },
    { nombre: "Escritorio", categoria: "Muebles", precio: 4000 },
    { nombre: "Audífonos", categoria: "Tecnología", precio: 800 }
];

let productosNuevos = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === 'Tecnología' && productos[i].precio > 1000) {
        productosNuevos.push(productos[i]);
    }

}

console.log('Original:', productos);
console.log('Filtrado:', productosNuevos);