//se puede ejecutar con el terminal: node clase1_3.js
function Curso(nombre,notas){
    this.nombre= nombre;
    this.notas=notas;
}

var c1 = new Curso("javascript",[10,20,30]);
var c2 = new Curso("typescript",[15,20,80]);

function Alumno(nombre,cursos){
    this.nombre=nombre;
    this.cursos=cursos;
    this.agregarCurso = function(curso){
        this.cursos.push(curso);
    }
}

var b = new Alumno("pedro",[new Curso("html",[])]);
b.cursos.push(new Curso("git",[]));

var a = new Alumno("Eduardo",[c1]);
a.agregarCurso(c2);
var alumnos = [];
alumnos.push(a);

console.log("El nombre es: ",c1.nombre);
console.log("Las notas son: ");
for (i=0;i<c1.notas.length;i++)
    console.log(c1.notas[i]);
