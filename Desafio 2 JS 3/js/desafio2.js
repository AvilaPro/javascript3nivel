
$(document).ready(function(){
    $("#agregar").hide();
    $("#boton2").hide();
})

function bloquear_letras(event) {
    return validar_numero(event);
}
function bloquear_numeros(event) {
    return validarletra(event);
}

$(".incodigo").keypress(function(e){
    return validar_numero(e);
})
$(".innombre").keypress(function(e){
    return validarletra(e);
})
$(".inexistencia").keypress(function(e){
    return validar_numero(e);
})



function Producto(codigo,nombre,existencia,iva,categoria){
    this.codigo=codigo;
    this.nombre=nombre;
    this.existencia=existencia;
    this.iva=iva;
    this.categoria=categoria;
}
var Productos = new Producto([],[],[],[],[]);


$("#boton1").click(function(){
    
    if($(".incodigo").val()==""){
        $(".div-codigo").toggleClass("error");
        return true;
    }else{
        $(".div-codigo").removeClass("error");
    }
        if($(".innombre").val()==""){
            $(".div-nombre").toggleClass("error");
            return true;
        }else{
            $(".div-nombre").removeClass("error");
        }
            if($(".inexistencia").val()==""){
                $(".div-existencia").toggleClass("error");
                return true;
            }else{
                $(".div-existencia").removeClass("error");
            }
                if($(".incategoria").val()==""){
                    $(".div-categoria").toggleClass("error");
                    return true;
                }else{
                    $(".div-categoria").removeClass("error");
                }
                let cod = $(".incodigo").val();
                let nom = $(".innombre").val();
                let exi = $(".inexistencia").val();
                let iv = $(".iniva")[0].chequed;
                let categ = $(".incategoria").val();
                Productos.codigo.push(cod);
                Productos.nombre.push(nom);
                Productos.existencia.push(exi);
                Productos.iva.push(iv);
                Productos.categoria.push(categ);

                console.log(Productos);
                var tr_nuevo = document.createElement("tr");
                var td_nuevo1 = document.createElement("td");
                var td_nuevo2 = document.createElement("td");
                var td_nuevo3 = document.createElement("td");
                var td_nuevo4 = document.createElement("td");
                var td_nuevo5 = document.createElement("td");
                

                var texto1 = document.createTextNode(cod);
                var texto2 = document.createTextNode(nom);
                var texto3 = document.createTextNode(exi);
                var texto4 = document.createTextNode(iv);
                var texto5 = document.createTextNode(categ);
                
                td_nuevo1.appendChild(texto1);
                td_nuevo2.appendChild(texto2);
                td_nuevo3.appendChild(texto3);
                td_nuevo4.appendChild(texto4);
                td_nuevo5.appendChild(texto5);

                tr_nuevo.appendChild(td_nuevo1);
                tr_nuevo.appendChild(td_nuevo2);
                tr_nuevo.appendChild(td_nuevo3);
                tr_nuevo.appendChild(td_nuevo4);
                tr_nuevo.appendChild(td_nuevo5);

                $(".contenedor-info").append(tr_nuevo);
                $("#agregar").show();
                $("#contenedor-form").hide();
                $("#boton1").hide();   
                 

})
$("#boton2").click(function(){
    var comparacion = false;
    if($(".incodigo").val()==""){
        $(".div-codigo").toggleClass("error");
        return true;
    }else{
        $(".div-codigo").removeClass("error");
    }
        if($(".innombre").val()==""){
            $(".div-nombre").toggleClass("error");
            return true;
        }else{
            $(".div-nombre").removeClass("error");
        }
            if($(".inexistencia").val()==""){
                $(".div-existencia").toggleClass("error");
                return true;
            }else{
                $(".div-existencia").removeClass("error");
            }
                if($(".incategoria").val()==""){
                    $(".div-categoria").toggleClass("error");
                    return true;
                }else{
                    $(".div-categoria").removeClass("error");
                }
                // let codi = "";
                // codi = $(".incodigo").val();
                let codig = $(".incodigo").val();

                console.log("cod:"+codig);
                
                console.log("comparacion antes del for: "+comparacion);

                for(i=0;i<Productos.codigo.length;i++){
                    // let compar = parseInt();
                    // console.log(" cod prod:"+compar+"en la posicion i: "+i);
                    if(codig == Productos.codigo[i]){
                        var comparacion = false;
                    }else{
                        if(codig != Productos.codigo[i]){
                            var comparacion = true;
                        }
                    }
                }
                console.log("comparacion luego del for: "+comparacion);
                if(comparacion){

                    $(".div-codigo").removeClass("error");

                    let cod = $(".incodigo").val();
                    let nom = $(".innombre").val();
                    let exi = $(".inexistencia").val();
                    let iv = $(".iniva")[0].chequed;
                    let categ = $(".incategoria").val();
                    
                    Productos.codigo.push(cod);
                    Productos.nombre.push(nom);
                    Productos.existencia.push(exi);
                    Productos.iva.push(iv);
                    Productos.categoria.push(categ);

                    console.log(Productos);
                    var tr_nuevo = document.createElement("tr");
                    var td_nuevo1 = document.createElement("td");
                    var td_nuevo2 = document.createElement("td");
                    var td_nuevo3 = document.createElement("td");
                    var td_nuevo4 = document.createElement("td");
                    var td_nuevo5 = document.createElement("td");
                    

                    var texto1 = document.createTextNode(cod);
                    var texto2 = document.createTextNode(nom);
                    var texto3 = document.createTextNode(exi);
                    var texto4 = document.createTextNode(iv);
                    var texto5 = document.createTextNode(categ);
                    
                    td_nuevo1.appendChild(texto1);
                    td_nuevo2.appendChild(texto2);
                    td_nuevo3.appendChild(texto3);
                    td_nuevo4.appendChild(texto4);
                    td_nuevo5.appendChild(texto5);

                    tr_nuevo.appendChild(td_nuevo1);
                    tr_nuevo.appendChild(td_nuevo2);
                    tr_nuevo.appendChild(td_nuevo3);
                    tr_nuevo.appendChild(td_nuevo4);
                    tr_nuevo.appendChild(td_nuevo5);

                    $(".contenedor-info").append(tr_nuevo);
                    $("#agregar").show();
                    $("#contenedor-form").hide();
                }
                if(!comparacion){
                    alert("El producto ya fue agregado");
                    $(".div-codigo").toggleClass("error");
                }   
})

$("#agregar2").click(function(){
    $(".incodigo").val("");
    $(".innombre").val("");
    $(".inexistencia").val("");
    $(".incategoria").val("");
    $("#agregar").hide();
    $("#contenedor-form").show();
    $("#boton2").show();
})