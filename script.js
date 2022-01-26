//Boton de copiado
function copiado() {
    var copiarTexto= document.getElementById("msg");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiarTexto.value);
}

//Funcion para encriptar
function encriptacion() {
    var texto= document.querySelector("#input-texto").value;
    var textoR= texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.getElementById("msg").value=textoR;
    formulario.reset();
}   

//funcion para desencriptar
function desencriptacion() {
    var texto= document.querySelector("#input-texto").value;
    var textoR=texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("msg").value=textoR;
    formulario.reset();
}



    
  
