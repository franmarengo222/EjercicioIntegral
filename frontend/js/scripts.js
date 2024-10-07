const cargarMusculos = () => {
  fetch('http://localhost:3000/musculos')
    .then(response => response.json())
    .then(data => {
      const tablaContenido = document.getElementById('tabla-contenido');
      tablaContenido.innerHTML = ''; // Limpiamos el contenido previo
      data.forEach(musculo => {
        tablaContenido.innerHTML += `
          <tr>
            <td>${musculo.nombre}</td>
            <td>${musculo.funcion}</td>
            <td>${musculo.ubicacion}</td>
            <td>${musculo.tipoFibra}</td>
            <td>${musculo.acciones}</td>
            <td><a href="${musculo.verMas}" target="_blank">Ver más</a></td>
          </tr>
        `;
      });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
};
cargarMusculos();
