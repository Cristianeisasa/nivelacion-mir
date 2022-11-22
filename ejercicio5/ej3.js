let mayor = 0;
let indice = 0;

function maxIndex(arreglo){
    for(i = 0; i < arreglo.length; i++){
        if (arreglo[i] > mayor)
        {
            mayor = arreglo[i];
            indice = i;
        }else{
            console.log("Undefined");
        }
    }
     
    console.log("El numero mayor es: " + mayor + " y su indice es:" + indice);
}

maxIndex([1, 2 ,3]);
maxIndex([10, 9 , 8, 7, 6, 5, 4]);
maxIndex([]);