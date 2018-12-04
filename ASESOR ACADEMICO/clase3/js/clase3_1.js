
$("#boton-menu").click(
    function(){
        //$(".container").fadeToggle("slow");
        $(".container").slideToggle(500);
    }
)
n=0;
$(".central-boton").click(function(){

    $(this.parentNode).animate({"width":"500"},
        function(){
            $(this).css({"background-color":"red"});
            $(this).fadeOut("slow");
            n++;
            if (n==6)
                $(".container").slideToggle(500);
        }
    );
})
//$(".oculta").fadeOut(0);
$(".oculta").on(
    {
        "mouseout":
            function (){
                $(this).fadeOut("slow",function(){
                    $(this.previousSibling).fadeIn("slow")
            })
        },
        "mouseenter":function(){}
    }
)
$(".img-responsive").on(
    {
        "mouseenter":
            function (){
                $(this.nextSibling).fadeIn("slow")
                $(this).fadeOut("slow",function(){
                   
                })
            },
        "mouseout":
            function (){}
    }
)