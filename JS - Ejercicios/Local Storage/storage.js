var personas = [];

// 1)
function agregarPersona() {
  var nombre = $("#nombre").val();
  var apellido = $("#apellido").val();
  var dni = $("#dni").val();
  var telefono = $("#telefono").val();

  var persona = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    telefono: telefono
  };

  agregarTelefonosAmigos(persona);

  personas.push(persona);

  var personasJSON = JSON.stringify(personas);

  localStorage.setItem("personas", personasJSON);

  mostrarPersonas();
}
// 2)
function armarTabla() {
  console.log("ARMANDO LA TABLAAA");
  var tablaPersonas = $("<table id='tablaPersonas'></table>");
  $("#container").append(tablaPersonas);
}

// 3)
function mostrarPersonas() {

// var tablaPersonas = $("<table id='tablaPersonas'></table>");
// $("#container").append(tablaPersonas);


  var tablaPersonas = $("#tablaPersonas");
  $(".fila").remove();

  for (let i = 0; i < personas.length; i++) {
    // 1) Por cada persona debo definir una fila
    var fila = $("<tr class='fila'></tr>");
    // 2) Por cada persona debo armar los td
    var tdNombre = "<td>" + personas[i].nombre + "</td>";
    var tdApellido = "<td>" + personas[i].apellido + "</td>";
    var tdDni = "<td>" + personas[i].dni + "</td>";
    var tdTelefono = "<td>" + personas[i].telefono + "</td>";
    // 3) Cada fila la debo appendear a la tabla
    fila.append(tdNombre);
    fila.append(tdApellido);
    fila.append(tdDni);
    fila.append(tdTelefono);

    tablaPersonas.append(fila);
  }
}

function verificarLS() {
    if(localStorage.personas !== undefined ) {
        personas = JSON.parse(localStorage.personas)
    }
}

function agregarTelefonosAmigos(pepe){
  console.log("entrando a agregar personas", pepe)
}


armarTabla();
verificarLS();
mostrarPersonas();

/* Agregar a mi archivo .jsuna función llamada cargarDropDown. 
En dicha función usa jquery para crear el siguiente menú desplegable:

ID = desplegable
nombre = amigos
múltiple
🙋‍ <select id="dropdown" name="amigos" multiple> 

Dentro de la función, iterar el array de personas, por cada persona crear con jquery un tag <option>. 
Asignarle al .valy al .textdel <option> EL telefonode la personalidad. 
Hacer <option>adjunto de la lista desplegable prevaimente definido.

⚠️ Recargar la página y validar si visualizamos correctamente el menú desplegable.
😏Si no ves el desplegable ... ¿estás llamando a la función cargarDropDownen algún lado? */

