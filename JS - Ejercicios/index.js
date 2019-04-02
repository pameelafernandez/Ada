$(document).ready(function(){
  $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000)
        alert('animación')
});

$('#ejecutar').on('click', function(){
    $('.caja').slideDown(1000)
});
});