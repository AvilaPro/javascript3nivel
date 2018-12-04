$("#loading").hide();
$("#cargar").click(function(){
    $("#loading").show();

    $.ajax({
        url     :"http://www.omdbapi.com/?",
        success :function(respuesta){
            console.log(respuesta)
        },
        data    :{
            s       :"avenger",
            apikey  :"477db7f4"
        },
        error   :function(){
            console.log("error")
        },
        complete:function(){
            $("#loading").hide();
        },
        timeout :3000,
        type    :"get",
        dataType:"JSON"
    })
});