let mayor = 0;

function max(arreglo){
    for(i = 0; i < arreglo.length; i++){
        if (arreglo[i] > mayor)
        {
            mayor = arreglo[i];
        }
    }
     
    console.log(mayor);
}

max([1,2,3]);
max([10,9,8,7,6,5,4]);
max([]);