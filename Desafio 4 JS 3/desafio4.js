(function (){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            console.log(this.status);
            console.log(this.responseText);
            let respuesta1 = JSON.parse(this.responseText);
            if(respuesta1.status=="Ok"){
                $("#resultado1").append(respuesta1.data.total+"<br>");
            }

        }
    }   
    let url="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=6ddd5f089a318e5ec9ceb6f22240ae43&hash=72a3205285b399ff1bdb12129b97bad1";
    let recurso=""
    let parametros=""
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
})();