$("#cargar").click(function(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            $("#resultado").text(this.responseText);
        }
    }   
    let url="http://www.omdbapi.com/";
    let recurso="/"
    let parametros="?apikey=92c1362b&s=avenger"
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
});

// (function (){
//     var ajax=new XMLHttpRequest();
//     ajax.onreadystatechange = function(){
//         if (this.readyState==4){
//             console.log(this.status);
//             console.log(this.responseText)
//         }
//     }   
//     let url="http://www.cne.gov.ve/web/registro_electoral";
//     let recurso="/ce.php?"
//     let parametros="nacionalidad=V&cedula=14978131"
//     ajax.open("GET",url+recurso+parametros,true);
//     ajax.send();
// })();
