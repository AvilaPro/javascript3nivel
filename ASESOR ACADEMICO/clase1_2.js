var alumnos=[
    {
        nombre  :"jose luis",
        cursos  :[
            {
                nombre  :"javascript",
                notas   :[
                    10,20,30
                ]
            },
            {
                nombre  :"typescript",
                notas   :[
                    30,50,80
                ]
            }
        ]
    },
]

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