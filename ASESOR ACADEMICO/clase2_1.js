function Seccion(nombre,numero){
    this.nombre=nombre;
    this.numero=numero;
}
var sec=new Seccion("javascript",2762);
console.log(JSON.stringify(sec))
var alumno = {
    "nombre"    :"jose luis",
    "curso"     :"java script",
    "nota"      : 80,
    "aprobado"  :false
}

// convertir el objeto a string
console.log(JSON.stringify(alumno))
// se define un string con notacion de objeto
var objetoStr = '{"producto":"monitor",'+
                '"color":"blanco",'+
                '"encendido":true}'
var objeto = JSON.parse(objetoStr);
if (objeto.encendido)
    console.log(objeto.color)