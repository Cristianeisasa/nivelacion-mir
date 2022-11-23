let pedro = {nombre: "Pedro Pérez", 
            edad: 30, 
            activo: "true", 
            hobbies: ["programar", "squash", "piano"],
            saludar : function (){
                return "Hola me llamo " + this.nombre;
            }
        }

console.log(pedro.nombre);
pedro.estatura = "1.8";

delete pedro.activo;

for (var llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(pedro[llave])
    }
  }

console.log(pedro.saludar());

