$("#cargar").click(function(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            // la respuesta la convierto en JSON
            let respuesta = JSON.parse(this.responseText);
            if (respuesta.Response=="True"){
                $("#resultado").html(respuesta.totalResults);
                for (let i=0;i<respuesta.Search.length;i++){
                    $("#resultado").append(respuesta.Search[i].Title+"<br>")
                }
            }else{
                $("#resultado").html("Error al conectarse");
            }
        }
    }   
    let url="http://www.omdbapi.com";
    let recurso="/?"
    let parametros="apikey=477db7f4&s=avenger"
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
});

(function (){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            console.log(this.status);
            console.log(this.responseText)
        }
    }   
    let url="http://www.cne.gov.ve/web/registro_electoral";
    let recurso="/ce.php?"
    let parametros="nacionalidad=V&cedula=14978131"
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
})();
