let suma = "";

function join(arreglos){
    for (let i = 0; i < arreglos.length; i++) {
        suma += arreglos[i];
        suma += " ";
    }
        console.log(suma);
        suma = "";
    
}

join(["Hola", "mundo"]);
join(["Make", "It", "Real"]);
join([]);