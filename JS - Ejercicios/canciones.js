
/* 1 array vacio con canciones escuchas
2 render button "ya escuché"
3 funcion marcarComoEscuchada 
borro del array canciones
agrego en array escuchadas
*/
let canciones = [
    { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
    { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
    { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
    { nombre: "No se tu", autor: "Luismi", genero: "Latin" },
    {
      nombre: "ponerte en 4",
      autor: "Los amigos invisibles",
      genero: "latin pop"
    },
    { nombre: "Bodak Yellow", autor: "Carbi B", genero: "HipHop" }
  ];
  let cancionesEscuchadas = [];


  function crearTabla() {
    var miTabla = $('<table id="tablaCanciones"></table>');
    var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
    miTabla.append(cabecera);
    var container = $("div.table-place");
    container.append(miTabla);
    render();
  }

  function borrarCancion(cancion) {
    console.log(cancion);
    // 1) recupero el indice de la cancion a borrar
    var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
    console.log(indice);
    // 2) borro la cancion de mi lista
    canciones.splice(indice, 1);
    limpiarTabla();
    render();
  }

  function limpiarTabla() {
    $(".fila").remove();
  }

  function marcarComoEscuchada(cancion) {
    var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
    console.log(indice);
    var cancionEscuchada = canciones[indice];
    // 2) borro la cancion de mi lista
    canciones.splice(indice, 1);
    // 3) push de la cancion escuchada
    cancionesEscuchadas.push(cancionEscuchada);
    console.log({ canciones });
    console.log({ cancionesEscuchadas });
    // Esto que repetimos constantemente no lo podemos hacer en otro lugar?
    limpiarTabla();
    render();
  }

  function render() {
    var tabla = $("#tablaCanciones");
    for (let i = 0; i <= canciones.length; i++) {
      var nombre = canciones[i].nombre;
      var autor = canciones[i].autor;
      var genero = canciones[i].genero;

      var tdNombre = "<td>" + nombre + "</td>";
      var tdAutor = "<td>" + autor + "</td>";
      var tdGenero = "<td>" + genero + "</td>";

      var btnDelete = $("<button>Delete</button>");
      btnDelete.on("click", function() {
        borrarCancion(canciones[i]);
      });

      var btnEscuchada = $("<button>Ya la escuche!</button>");
      btnEscuchada.on("click", function() {
        canciones[i];
        marcarComoEscuchada(canciones[i]);
      });

      var fila = $('<tr class="fila"></tr>');

      fila.append(tdNombre);
      fila.append(tdAutor);
      fila.append(tdGenero);
      fila.append(btnDelete);
      fila.append(btnEscuchada);

      tabla.append(fila);
    }
  }

  crearTabla();