document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/desarrolladoras');

        if (!response.ok) {
            throw new Error('Error al obtener las desarrolladoras');
        }
        const desarrolladoras = await response.json();
        const tableBody = document.querySelector('table tbody');

        desarrolladoras.forEach(desarrolladora => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${desarrolladora.id}</td>
                <td>${desarrolladora.nombre}</td>
                <td>${desarrolladora.cant_juegos_publicados}</td>
                <td>${desarrolladora.ubicacion}</td>
                <td>${desarrolladora.ultimo_juego_publicado}</td>
                <td>${desarrolladora.rating}</td>
                <td>
                  <button class="button is-danger" onclick="eliminarDesarrolladora(${desarrolladora.id}, this)">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar las desarrolladoras:', error);
    }
});

function eliminarDesarrolladora(id, boton) {
    fetch(`http://localhost:3000/api/v1/desarrolladoras/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        const fila = boton.closest('tr');
        fila.remove();
      } else {
        console.error('No se pudo eliminar la desarrolladora');
      }
    })
    .catch(error => console.error('Error al eliminar la desarrolladora:', error));
  }
