/*
crear el html con el contenedor vacío
crear el js
en el js crear el array de los numeros que queremos usar
por cada uno de los numeros en el array creamos un div en el html que contenga ese numero
a cada div creado agregamos la funcion para el click

*/
var numeros = [
    {numero: 1},
    {numero: 2},
    {numero: 3},
    {numero: 4},
    {numero: 5},
    {numero: 6},
    {numero: 7},
    {numero: 8},
    {numero: 9},
];

var clicks = 0; 

numeros = numeros.sort(function (a, b) {
  return Math.random() - Math.random()
});

function crearTablero () {
    var container = $('.game');

    for (let i = 0; i < numeros.length; i++) {
        let elNumero = numeros[i].numero;
        var nuevoDiv =
        $('<div class="numero"><span>' + numeros[i].numero + '</span></div>')
        container.append(nuevoDiv);

        nuevoDiv.on('click', function(){
           $(this).addClass('mostrar');
           if (elNumero === 1) {
               alert('ganastee!! con ' + clicks + ' clicks');
           }
           clicks++
        })
    }
}

crearTablero();

