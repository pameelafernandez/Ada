
function agregarTexto () {
    var nuevoP = document.createElement('p') //con createElement le digo que me cree un elemento y como parámetro le paso la etiqueta que quiero que me cree
    nuevoP.innerHTML = 'hola mundo!';
    
    var elDiv = document.getElementById('principal');
    
    elDiv.appendChild(nuevoP) // che div agregá el hijo que te creé

}

function eliminarImagen () {
    var elDiv = document.getElementById('principal');
    var laImg = document.getElementById('image');

    elDiv.removeChild(laImg);
}

document
.getElementById('add')
.addEventListener('click', agregarTexto);
document
.document
.getElementById('remove')
.addEventListener('click', eliminarImagen);