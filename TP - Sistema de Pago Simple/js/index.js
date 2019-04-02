const misProductos = [];
let pos = misProductos.length; //esta variable es para poder borrar el prodcuto de la lista y se reste en el subtotal sin bugs
let nombreUsuario = "";
const RECARGO_EFECTIVO = 1;
const RECARGO_DEBITO = 1.05;
const RECARGO_CREDITO = 1.10;
const RECARGO_CHEQUE = 1.20;
const RECARGO_1_CUOTA = 1;
const RECARGO_12_CUOTAS = 1.20;
const RECARGO_24_CUOTAS = 1.45;
const RECARGO_36_CUOTAS = 1.70;

$('.form-user button').click(function (){ //función para validar usuario
    $('.contenedor-principal').show();
    $('.form-user input').val();
    $('.pagar').hide();
});

function boton (botonPresionado) { //botonera
    switch (botonPresionado) {
      case 1:
        empezarCompra();
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        console.log('boton ' + botonPresionado);
        break;
      default:
        console.log('presionaste cualquier cosa');
    }
};

function empezarCompra(){ //funcíon que se ejecuta cuando hacemos click en 1
    $('.contenedor-principal').append('<p class="cartelito-espera">Será atendido en Instantes</p>');

    setTimeout(() => {
        $('#nuevo-producto').show();
        $('.cartelito-espera').remove();
        $('.container').show();
    }, 1000);
};

function agregarProductos() { //arma la lista de productos
    var nombreDelProducto = $('#nombreProducto').val();
    console.log(nombreDelProducto);
    var valorDelProducto = $('#precioProducto').val();
    var li = $('<li class="producto"></li>');
    var button = $('<button>Borrar Producto</button>');
    
    button.on('click', function(){
        li.remove();
        misProductos.splice(pos, 1)
        subTotal();
    });

    var producto = {
        nombre: nombreDelProducto,
        precio: parseInt(valorDelProducto)
    };

    misProductos.push(producto);
    li.text(producto.nombre + ' ' + '$' + producto.precio); 
    li.append(button);
    $('#miLista').append(li);
    
    subTotal();

    console.log(producto)
    console.log(pos + "soy pos");
}

function subTotal() { //calcula el subtotal de la compra
    var suma = 0;
    for(i = 0 ; i < misProductos.length ; i++){
    precioproducto = misProductos[i].precio
    suma += precioproducto
    }
    console.log(suma + "suma");
    $('.subtotal').html('Subtotal:$ ' + suma);
};

$('.cerrar-compra').click(function () { //muestra los modos de pago
    $('.pagar').show();
});

$('.total').click(function () { //calcula e imprime el total de la compra
    let subtotal = subTotal();
    let mp = $('#mp').val();
    let cuotas = $('#cuotas').val();
  
    let recargoMp = 1;
    let recargoCuotas = 1;
  
    if (mp === 'efectivo') recargoMp = RECARGO_EFECTIVO;
    if (mp === 'debito') recargoMp = RECARGO_DEBITO;
    if (mp === 'cheque') recargoMp = RECARGO_CHEQUE;
    if (mp === 'credito') recargoMp = RECARGO_CREDITO;
  
    if (cuotas === '1') recargoCuotas = RECARGO_1_CUOTA;
    if (cuotas === '12') recargoCuotas = RECARGO_12_CUOTAS;
    if (cuotas === '24') recargoCuotas = RECARGO_24_CUOTAS;
    if (cuotas === '36') recargoCuotas = RECARGO_36_CUOTAS;
  
    let total = subtotal * recargoMp * recargoCuotas;
  
    $('#total').html(isNaN(total));
    console.log(total + 'total')
  });

  $('#mp').on('change', function(){ //si la opción es crédito se muestra el select de las cuotas si no no se muestra
    if ($(this).val() === 'credito') {
        $('#cuotas').show();
    }
    else {
        $('#cuotas').hide();
    }
});
  

