function mostrarSeccion(seccion) {
  document.getElementById("agregar").classList.add("hidden");
  document.getElementById("buscar").classList.add("hidden");
  document.getElementById("listar").classList.add("hidden");
  document.getElementById(seccion).classList.remove("hidden");
}

// Guardar persona
document.getElementById("formAgregar").addEventListener("submit", function (e) {
  e.preventDefault();
  const persona = {
    id: document.getElementById("id").value.trim(),
    nombres: document.getElementById("nombres").value.trim(),
    apellidos: document.getElementById("apellidos").value.trim(),
    direccion: document.getElementById("direccion").value.trim(),
    telefono: document.getElementById("telefono").value.trim()
  };

  let personas = JSON.parse(localStorage.getItem("personas")) || [];
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
  alert("Persona guardada exitosamente.");
  this.reset();
});

// Buscar persona
document.getElementById("formBuscar").addEventListener("submit", function (e) {
  e.preventDefault();
  const criterio = document.getElementById("criterio").value;
  const valor = document.getElementById("valorBusqueda").value.trim().toLowerCase();

  let personas = JSON.parse(localStorage.getItem("personas")) || [];
  let resultados = personas.filter(p => p[criterio].toLowerCase().includes(valor));

  const resultadoDiv = document.getElementById("resultadoBusqueda");
  if (resultados.length > 0) {
    let tabla = "<table><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>";
    resultados.forEach(p => {
      tabla += <tr><td>${p.id}</td><td>${p.nombres}</td><td>${p.apellidos}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>;
    });
    tabla += "</table>";
    resultadoDiv.innerHTML = tabla;
  } else {
    resultadoDiv.innerHTML = "No se encontraron resultados.";
  }
});

// Listar personas
function cargarLista() {
  let personas = JSON.parse(localStorage.getItem("personas")) || [];
  const listaDiv = document.getElementById("listaPersonas");

  if (personas.length > 0) {
    let tabla = "<table><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>";
    personas.forEach(p => {
      tabla += <tr><td>${p.id}</td><td>${p.nombres}</td><td>${p.apellidos}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>;
    });
    tabla += "</table>";
    listaDiv.innerHTML = tabla;
  } else {
    listaDiv.innerHTML = "No hay personas registradas.";
  }
}