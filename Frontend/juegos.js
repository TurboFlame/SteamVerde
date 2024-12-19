document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/juegos');

        if (!response.ok) {
            throw new Error('Error al obtener las juegos');
        }
        const juegos = await response.json();
        const tableBody = document.querySelector('table tbody');

        juegos.forEach(juego => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${juego.id}</td>
                <td>${juego.nombre}</td>
                <td>${juego.tipo}</td>
                <td>${juego.precio}</td>
                <td>${juego.empresa_desarrolladora}</td>
                <td>${juego.requisitos_minimosGama}</td>
                <td>${juego.rating}</td>
                <td>
                  <button class="button is-danger" onclick="eliminarJuego(${juego.id}, this)">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar las juegos:', error);
    }
});

function eliminarJuego(id, boton) {
    fetch(`http://localhost:3000/api/v1/juegos/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        const fila = boton.closest('tr');
        fila.remove();
      } else {
        console.error('No se pudo eliminar la juego');
      }
    })
    .catch(error => console.error('Error al eliminar la juego:', error));
  }
