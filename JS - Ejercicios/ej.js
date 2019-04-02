// // Dado el siguiente bloque de codigo construir un objeto JSON llamado persona
let nombre = "Juan";
let apellido = "Perez";
let edad = "61";

var persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad
};

console.log(JSON.stringify(persona));

// // 1) Definir un JSON llamado producto que contenga nombre, categoria y precio

var producto =`{
    "nombre": "coca",
    "categoria": "bebida",
    "precio": 30,
}`;
console.log(JSON.parse(producto));
// // 2) Definir un JSON llamado productos que contenga un array de productos.
// // Los productos deberan ser objetos y tener nombre, categoria y precio
var productos = `[
    { "nombre": "coca cola", "categoria": "bebida", "precio": 30},
    { "nombre": "fanta", "categoria": "bebida", "precio": 30},
    { "nombre": "manaos", "categoria":"bebida", "precio":30}
]`;
console.log(JSON.parse(productos));
// // 3) Dados los objetos
// // Asignarle los telefonos a la persona en un array y luego construir el objeto JSON. Mostrar en consola.

var telefono1 = {pais:54, area: 911, numero: 40395223 };
var telefono2 = {pais:54, area: 911, numero: 51756283 };
var persona1 = {nombre: "juana", apellido:"perez", telefonos:[telefono1, telefono2]};
console.log(JSON.stringify(persona1));

// // 4) Dado el ejercicio 3, agregarles a esas personas
// //la propiedad gusto de pizza favorita, pasar a JSON y mostrar en consola
// // Primero utilizar JSON.parse para transformar el JSON persona en OBJETO javascript
console.log(JSON.parse(persona1));
// // Luego realizar las modificaciones necesarias
var persona1 = {nombre: "juana", apellido:"perez", telefonos:[telefono1, telefono2], pizza:"muzzarella"};
// // Por ultimo, nuevamente utilizar JSON.stringify para convertir a JSON y mostrar en consola
console.log(JSON.stringify(persona1));
// // 5) Dado el ejercicio 4, agregarles un array que sea color favorito y mostrar en consola
console.log(JSON.parse(persona1));
var persona1 = {nombre: "juana", apellido:"perez", telefonos:[telefono1, telefono2], pizza:"muzzarella", color: "rojo"};
// // Mismo procedimiento paso 4.
console.log(JSON.stringify(persona1));


// // 6) Crear un archivo HTML con 3 inputs
// // Nombre, Apellido, Edad
// // Agregar un boton en el HTML con el texto "Generar JSON"
// // Cuando se clickea el boton, tomar los campos de los inputs, crear un objeto persona y generar un JSON
// // El JSON generado se debe mostrar en una etiqueta <p> generada dinamicamente
var personas = [];

function generarJSON(){
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var edad = $('#edad').val();
    var parrafo = $('#parrafo');
    if (nombre && apellido && edad) {
        var persona = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };
        parrafo.text(JSON.stringify(persona));
        personas.push(persona);
        cargarPersonasEnDropDown();
        return; 
    } 
    else {
        parrafo.text('Completar todos los campos');
    }
};


function crearDropDown() {
    var miDropDown = $(
      '<select id="dropdown" name="personas" multiple="multiple">'
    );
    $("#container").append(miDropDown);
  }
  
  function cargarPersonasEnDropDown() {
    var miDropDown = $("#dropdown");
    $(".opcion").remove();
    for (let i = 0; i < personas.length; i++) {
      var option = $('<option class"opcion"></option>');
      option.val(personas[i].nombre);
      option.text(personas[i].nombre);
      miDropDown.append(option);
    }
  }
  
  crearDropDown();

// // 7) Dado el ejercicio 6
// // Validar que los campos estén completos
// // Si están completos, convertir a JSON
// // Si están incompletos, mostrar un mensaje

// // Agregar dinámicamente un dropdown que muestre el nombre de todas las personas
// // poder seleccionar más de una y en la funcion del boton "Generar JSON" mostrar en un console.log todas las opciones seleccionadas