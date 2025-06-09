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
document.getElementById('form-buscar').addEventListener('submit', function(e) {
  e.preventDefault();
  const criterio = document.getElementById('criterio').value;
  const valor = document.getElementById('valor-busqueda').value.toLowerCase();
  const personas = JSON.parse(localStorage.getItem('personas')) || [];

  const resultados = personas.filter(p =>
    p[criterio].toLowerCase().includes(valor)
  );

  let html = '';
  if (resultados.length > 0) {
    html += '<table border="1"><tr><th>Documento</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>';
    resultados.forEach(p => {
      html += `<tr><td>${p.id}</td><td>${p.nombres}</td><td>${p.apellidos}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>`;
    });
    html += '</table>';
  } else {
    html = 'No se encontraron resultados.';
  }
  document.getElementById('resultado-busqueda').innerHTML = html;
});

// Listar personas
function listarPersonas() {
  const personas = JSON.parse(localStorage.getItem('personas')) || [];
  let html = '<table border="1"><tr><th>Documento</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>';
  personas.forEach(p => {
    html += `<tr><td>${p.id}</td><td>${p.nombres}</td><td>${p.apellidos}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>`;
  });
  html += '</table>';
  document.getElementById('lista-personas').innerHTML = html;
}
