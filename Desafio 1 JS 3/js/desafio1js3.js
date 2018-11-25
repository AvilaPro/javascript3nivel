function esta_vacio_cedula()
{
	if ( document.form1.cedula.value == "" )
	{
		document.getElementById("errorcedula").style.display="block";
		document.form1.cedula.focus();
		return true;
	}else{
		document.getElementById("errorcedula").style.display="none";
		return false;
	}		
}
function esta_vacio_nombre()
{
	if ( document.form1.nombre.value == "" )
	{
		document.getElementById("errornombre").style.display="block";
		document.form1.nombre.focus();
		return true;
	}else{
		document.getElementById("errornombre").style.display="none";
		return false;
	}		
}
function esta_vacio_nota()
{
	if ( document.form1.nota.value == "" )
	{
		document.getElementById("errornota").style.display="block";
        document.form1.nota.focus();
        document.form1.btnAgregar.disabled=true;
		return true;
	}else{
		document.getElementById("errornota").style.display="none";
		return false;
	}		
}

function validarnota(a){
    // para que funcione en cualquier navegador
	tecla = (a.keyCode!=0) ? a.keyCode : a.charCode; 
    // para permitir backspace
	if (tecla==8 || tecla==9) return true; 
    // de define el conjunto de caracteres validas
	patron = /[0-9-]/;
    // se convierte a caracter
	te = String.fromCharCode(tecla);
    // se evalua si la tecla presionada este en el conjunto
    note=parseInt(document.form1.nota.value);
    console.log(note);
    if(patron.test(te)){
        document.form1.btnAgregar.disabled=false; 
    } 
    return patron.test(te);
}   

function Alumno(cedula,nombre,nota){
    this.cedula=cedula
    this.nombre=nombre;
    this.nota=nota;
    
}
function Cursos(numero,curso,Alumno){
    this.numero=numero;
    this.curso=curso;
    this.Alumno=Alumno;
    this.agregarAlumno = function(Alumno){
        this.alumno.push(new Alumno(cedula,nombre,nota));
    }
    this.calcularPromedio = function(nota){
        for(i=1;i<Alumno.nota.length;i++){
            notaprom=(notaprom+nota)/Alumno.nota.length;
        }
    }
}

var c1 = new Cursos(Math.round(Math.random()*5),"javascript3",new Alumno([],[],[]));

var div_nuevo1 = document.createElement("div");
var div_nuevo2 = document.createElement("div");
var div_nuevo3 = document.createElement("div");


var texto1 = document.createTextNode(c1.numero);
var texto2 = document.createTextNode(c1.curso);
var texto3 = document.createTextNode(c1.alumno);

div_nuevo1.appendChild(texto1);
div_nuevo2.appendChild(texto2);
div_nuevo3.appendChild(texto3);

var div_section=document.getElementById("section1");
div_section.appendChild(div_nuevo1);
div_section.appendChild(div_nuevo2);
div_section.appendChild(div_nuevo3);

document.form1.btnAgregar.onclick= function(){
    cedul=document.form1.cedula.value;
    nombe=document.form1.nombre.value;
    notaa=document.form1.nota.value;
    c1.cedula
}

