$("#cargar").click(function(){
    var buscador = $("#buscar").val();
    console.log("buscador: "+buscador);
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            //la respuesta la convierto en JSON
            let respuesta = JSON.parse(this.responseText);
            if(respuesta.Response==="True"){
                $("#resultado").html(respuesta.totalResults);
                for (let i=0;i<respuesta.Search.length;i++){
                    $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"'><br>");
                    $("#resultado").append(respuesta.Search[i].Title+"</br>");
                }
            }else{
                $("#resultado").html("Error al conectarse");
            }
        }
    }   
    let url="http://www.omdbapi.com";
    let recurso="/"
    let parametros="?apikey=92c1362b&s="+buscador;
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
});