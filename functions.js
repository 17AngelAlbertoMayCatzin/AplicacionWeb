//JavaScript Angel Alberto May Catzin
    
//---------------Funciones para Seleccionar un archivo o Arrastrar un archivo---------------------------//
window.addEventListener('load', inicio, false);
function inicio() {
    document.getElementById('archivo').addEventListener('change', getFile);
    function getFile(ev) {
        var files = ev.target.files
            , file = files[0];
        var name = file.name;
        var extensionName = name.substr(-4);
       
        if ( extensionName == '.csv'){
            addEventListener('change', cargar, false); 
        } else{
            document.getElementById("error").innerHTML="Error: Usted selecciono un Archivo Inválido. Seleccione uno válido";
            setTimeout('document.location.reload()',4000);
        }
      } 
}

function cargar(ev) {
    document.getElementById('datos').innerHTML='Nombre del archivo:'+ev.target.files[0].name+'<br>'+
                                            'Tamaño del archivo:'+ev.target.files[0].size+'<br>'+  
                                            'Tipo MIME:'+ev.target.files[0].type;
    var arch=new FileReader();
    arch.addEventListener('load',leer,false);
    arch.readAsText(ev.target.files[0]);
}

function leer(ev) {
    document.getElementById('editor').value=ev.target.result;
  
}

  