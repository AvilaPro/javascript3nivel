
function Curso(nombre,notas){
    this.nombre = nombre;
    this.notas = notas;
}

const MAXIMO = 50

var c1 = new Curso("javascript",[10,20,30]);
var c2 = new Curso("typescript",[30,50,80]);

function Alumno(nombre,cursos){
    this.nombre = nombre;
    this.cursos = cursos;
    this.agregarCurso = function (curso){
        this.cursos.push(curso)
    }
}

var b = new Alumno("pedro",[new Curso("html",[])])
b.cursos.push(new Curso("git",[]))

var a = new Alumno("jose luis",[c1])
a.agregarCurso(c2);

var alumnos = [];
alumnos.push(a);
alumnos.push(new Alumno("maria",[]));

for (i=0;i<alumnos.length;i++){
    console.log("Nombre del alumnno "+i+":"+alumnos[i].nombre)
    for (j=0;j<alumnos[i].cursos.length;j++){
        console.log("Curso "+j+":"+alumnos[i].cursos[j].nombre)
        console.log("Las notas del alumno en el curso son:")
        for (k=0;k<alumnos[i].cursos[j].notas.length;k++){
            console.log(alumnos[i].cursos[j].notas[k])
        }
    }
}

console.log("El nombre es ",c1.nombre)
console.log("Las notas son:")
for (i=0;i<c1.notas.length;i++)
    console.log(c1.notas[i])
