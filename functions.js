//JavaScript Angel Alberto May Catzin

window.addEventListener('load', inicio, false);
function inicio() {
    document.getElementById('archivo').addEventListener('change', cargar, false);               
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
