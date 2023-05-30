function encriptar(){

var oracion= document.getElementById('CampoTexto').value.toLowerCase();
var textoEncriptado= oracion.replace(/e/img,'enter');
var textoEncriptado= textoEncriptado.replace(/o/img,'ober');

var textoEncriptado= textoEncriptado.replace(/i/img,'imes');

var textoEncriptado= textoEncriptado.replace(/a/img,'ai');

var textoEncriptado= textoEncriptado.replace(/u/img,'urat');
document.getElementById('foto').style.display= 'none';
document.getElementById('advertencia').style.display='none';
document.getElementById('textoEncriptado').innerHTML = textoEncriptado;
document.getElementById('copiador').style.display= 'show';
document.getElementById('copiador').style.display= 'inherit';





}



function desencriptar(){

var oracion= document.getElementById('CampoTexto').value.toLowerCase();
var textoProceso= oracion.replace(/enter/img,'e');
var textoProceso= textoProceso.replace(/ober/img,'o');

var textoProceso= textoProceso.replace(/imes/img,'i');

var textoProceso= textoProceso.replace(/ai/img,'a');

var textoProceso= textoProceso.replace(/urat/img,'u');

document.getElementById('foto').style.display= 'none';
document.getElementById('advertencia').style.display='none';
document.getElementById('textoEncriptado').innerHTML= textoProceso;
document.getElementById('copiador').style.display= 'show';
document.getElementById('copiador').style.display= 'inherit';
}


function copiar(){
 

var texto= document.getElementById('textoEncriptado');
navigator.clipboard.writeText(texto.textContent);
Swal.fire(
    'Listo!',
    'El mensaje ha sido copiado al portapapeles!',
    'success'
  )

}

function soloLetras(e){


key= e.KeyCode ||e.which;
tecla= String.fromCharCode(key).toString();
letras='abcdefghijkmnlopqrstuvwxyz';
especiales= [8,13,32];
tecla_especial=false;

for(var i in especiales){
if(key== especiales[i]){

  tecla_especial=true;
  break;
}
}

if(letras.indexOf(tecla)== -1 && !tecla_especial){

    Swal.fire({
        title: 'No puedes hacer eso!',
        text: 'Puedes colocar palabras que no tengan minúsculas, acentos y  caracteres especiales',
        imageUrl: 'robot-no.gif',
        imageWidth: 380,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })  
 return false;
}
}





