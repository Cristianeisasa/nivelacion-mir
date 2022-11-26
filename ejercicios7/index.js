let receta = [];

receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes.push({nombre: "pan", cantidad : 2});
receta.ingredientes.push({nombre: "Queso", cantidad : 1});

console.log(receta);

console.log(receta.ingredientes[0].nombre);

let contador = 0;
receta.ingredientes.forEach(ing => {
    contador = contador + ing.cantidad
});

console.log(contador);