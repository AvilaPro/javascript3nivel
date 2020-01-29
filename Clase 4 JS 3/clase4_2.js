
$("#loading").hide();
$("#cargar").click(function(){
    var buscador = $("#buscar").val();
    $("#loading").show();
    $.ajax({
        url     :"http://www.omdbapi.com/?",
        success :function(respuesta){
            console.log(respuesta);
            if(respuesta.Response==="True"){
                // $("#resultado").html(respuesta.totalResults);
                for (let i=0;i<respuesta.Search.length;i++){
                    $("#resultado").append(
                        "<div style='display:flex;flex-direction:column'>"
                        +"<img src='"+respuesta.Search[i].Poster+"'><br>"+
                        "<h3>'"+respuesta.Search[i].Title+"'</h3>"
                    )
                    // $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"'><br>");
                    // $("#resultado").append(respuesta.Search[i].Title+"</br>");
                }
            }else{
                $("#resultado").html("Error al conectarse");
            }           
        },
        data    :{
            s       :buscador,
            apikey  :"92c1362b"
        },
        error   :function(){
            console.log("error");//el se va a venir por aqui por problemas de comunicacion
        },
        complete:function(){
            $("#loading").hide();
        },
        timeout : 5000,
        type    :"get",
        dataType:"JSON"
    })
})