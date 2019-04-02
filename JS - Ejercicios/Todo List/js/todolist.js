var misItems = [];


function agregar() {
    console.log("llegó a la función");
    var valorDelInput = $('#input').val();
    console.log(valorDelInput);
    var li = $('<li class="item"></li>');
    var button = $('<button>Borrar</button>');
    button.on('click', function(){
        console.log('entró a borrar')
        li.remove()
    });
    var check = $('<input type="checkbox">')
    check.on('click', function(){
        li.css('text-decoration', 'line-through')
    });
    var item = {
        tarea: valorDelInput
    };
  
    misItems.push(item);
    li.text(item.tarea);
    console.log(misItems);
    $('#miLista').append(li);
    $(li).append(button);
    $(li).prepend(check);
  

};
function borrar(){
    console.log('entro a borrar')
    $('.item').remove()
};


