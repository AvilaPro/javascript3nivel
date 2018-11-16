calcular12Porc = function(precio){
    return precio*0.12;
}
var carro={
    //atributos

    "marca"     :"chevrolet",
    "modelo"    : "aveo",
    "año"       : 2015,
    "mostrar"   :function(){
        console.log("el año es ",this.año);
    },
    //metodos
    "aumentarPrecio" : function(aumento){
        this.precio += aumento;
    } ,
    "calcularIva"   :calcular12Porc,
};
carro.dueño="Eduardo";//los atributos se pueden crear despues.
carro.precio=1000;

console.log("1.",carro.calcularIva(carro.precio));//otra forma de hacer referencia a un metodo
console.log("2.","el carro es ",carro.marca);
console.log("3.","el carro es ", carro["marca"]);
console.log("4.","el precio del carro es ",carro.precio);
carro.mostrar(); //una forma de acceder a la funcion
carro["mostrar"](); //otra forma de acceder a funcion
