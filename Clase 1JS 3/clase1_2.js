
var alumno=[
    {
        nombre  :"Eduardo",
        cursos  :[
            {
                nombre  :"Javascript",
                notas   :[
                    10,20,30
                ]
            },
            {
                nombre  :"Typescript",
                notas   :[
                    30,50,80
                ]
            }
        ]
    },
    {
        nombre  :"Carlos",
        cursos  :[
            {
                nombre  :"Javascript",
                notas   :[
                    20,40,60
                ]
            },
            {
                nombre  :"Typescript",
                notas   :[
                    85,90,15
                ]
            }
        ]  
    }
]

console.log("1. El nombre del 1er alumno es: ",alumno[1].nombre);
console.log("2. Nombre de la segunda materia: ",alumno[1].cursos[1].nombre);
console.log("3. tercera nota de esa materia: ",alumno[1].cursos[1].notas[2]);

for (i=0;i<alumno.length;i++){
    console.log("Nombre del alumno: "+(i+1)+": "+alumno[i].nombre);
    for (j=0;j<alumno[i].cursos.length;j++){
        console.log("Nombre del curso "+(j+1)+": "+alumno[i].cursos[j].nombre);
        console.log("Las notas del alumno en este curso son: ");
        for (k=0;k<alumno[i].cursos[j].notas.length;k++){
            console.log("Nota "+(k+1)+": "+alumno[i].cursos[j].notas[k]);
        }
    }
}