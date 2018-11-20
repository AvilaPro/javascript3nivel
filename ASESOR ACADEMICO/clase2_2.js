
$(document).ready(
    function(){
        console.log("se cargo la pagina")
        document.body.style.background="yellow"
    }
)
$("h2").click(function(){
    alert(this.innerHTML)
})
$("#subtitulo").click(function(){
    $("ol").hide();
})
$("div h2").click(function(){
    console.log("hola kevin")
})
$("#esconder").click( function (){
    //let x = $("ol");
    if (this.value == "Esconder"){
        $("ol").hide();
        $("#esconder").val("Mostrar")
    }else{
        $("ol").show();
        $("#esconder").val("Esconder")
    }
})
$("#agregar").click(function(){
    let dato = prompt("Introduzca un texto:");
    $("ol").append("<li>"+dato+"</li>");
})

$("h1").click(function(){
    if ($("h1").height()>=150)
        $("h1").height(30);
    else
        $("h1").height($("h1").height()+10)
        
    $("h1").toggleClass("color")
})