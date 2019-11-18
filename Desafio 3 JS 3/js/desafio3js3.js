var n = 0;
var control = 0;
var cont = 0;
var control1 = 0;
var control2 = "";
var control3 = 0;

function Acierto(){
    $("#acertaste").hide();
}
function Fallaste(){
    $("#fallaste").hide();
    $("#"+control).css({"transform":"initial"});
    
    $("#"+control1).css({"transform":"initial"});
    setTimeout(voltearSegundos,1000);
}
function voltearSegundos(){
    $("#"+control2).css({"transform":"initial"});
    $("#"+control3).css({"transform":"initial"});
}
function Victoria(){
    $("#ganaste").show();
    $("#tabla1").hide();
}
$(".flip-card").click(function(){
    $(this.childNodes[1]).css({"transform":"rotateY(180deg)"});
    console.log("nombre del hijo: "+this.childNodes[1].nodeValue);
    
    cont++
    console.log("cont: "+cont);
    console.log("hijos del padre: "+this.childNodes.length);
    console.log("hijos del segundo div: "+this.childNodes[1].childNodes.length);
    console.log("name: "+this.childNodes[1].childNodes[1].firstChild.nodeValue);
    if(cont % 2 !== 0){
        control = parseInt(this.childNodes[1].childNodes[1].firstChild.nodeValue);
        if(control==4){
            control2="dd";
        }
        console.log("control: "+control);
        console.log("control2: "+control2);
              
    }
    if(cont % 2 == 0){
        control1 = parseInt(this.childNodes[1].childNodes[1].firstChild.nodeValue);
        control3 = control1+8;
        console.log("control: "+control);
        console.log("control1: "+control1);
        if(control == parseInt(this.childNodes[1].childNodes[1].firstChild.nodeValue)){
            n++;           
            var h1_nuevo = document.createElement("h1");
            var texto1 = document.createTextNode("Aciertos: "+n);
            h1_nuevo.appendChild(texto1);
            $("#aciertos").append(h1_nuevo);
            $("#acertaste").show();
            setTimeout(Acierto,3000);
            if(n == 8){
                setTimeout(Victoria,5000);
            }
        }
        if(control !== parseInt(this.childNodes[1].childNodes[1].firstChild.nodeValue)){
            // let cl = toString(control);
            $("#fallaste").show();
            setTimeout(Fallaste,2000);
            
        }
    }
})
function Fallaste(){
    $("#fallaste").hide();
    $("#"+control).css({"transform":"initial"});
    $("#"+control1).css({"transform":"initial"});
}


