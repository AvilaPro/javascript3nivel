// $("#boton_menu").click(
//     function(){
//         $(".col-md-4").fadeOut("slow"); 
//     }
// )

// $("#boton_menu").click(
//     function(){
//         $(".container").fadeToggle("slow");
//     }
// )

// $("#boton_menu").click(
//     function(){
//         $(".col-md-4").fadeToggle("slow");
//     }
// )

// $("#boton_menu").click(
//     function(){
//         $(".container").fadeToggle("slow"); //ocultar con animacion de desvanecer
//     }
// )
let n = 0
$(".central-boton").click(function()
{
    //tambien puede tener el id $("#",+this.parentNode).fadeOut("slow");
    $(this.parentNode).animate({"width":"500"},
        function(){
            $(this).css({"background-color":"red"});
            $(this).fadeOut("slow");
            n++
            if(n==6){
                $(".container").fadeToggle("slow");
            }
        })
})

$("#boton_menu").click(
    function(){
        $(".container").slideToggle("slow"); //ocultar con animacion de slider 
    }
)