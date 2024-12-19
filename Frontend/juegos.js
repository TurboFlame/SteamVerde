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

formAgregarJuego.addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const tipo = document.getElementById('tipo').value.trim();
    const precio = parseInt(document.getElementById('precio').value, 10);
    const empresaDesarrolladora = document.getElementById('empresaDesarrolladora').value.trim();
    const requisitos_minimosGama = parseInt(document.getElementById('requisitos_minimosGama').value, 10) || null;
    const rating = parseFloat(document.getElementById('rating').value) || null;
    const imagen = document.getElementById('imagen').value.trim() || "steamverde.png";
  
    if (!nombre) {
      alert('El campo "Nombre" es obligatorio.');
      return;
    }
    if (precio < 0 || (requisitos_minimosGama !== null && requisitos_minimosGama < 0) || (rating !== null && (rating < 0 || rating > 10))) {
      alert('Los valores numéricos no pueden ser negativos y el rating debe estar entre 0 y 10.');
      return;
    }
  
    const nuevoJuego = {
        nombre,
        tipo,
        precio,
        empresa_desarrolladora: empresaDesarrolladora || "SteamVerde&Co",
        requisitos_minimosGama,
        rating,
        imagen,
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/v1/juegos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoJuego),
      });
  
      if (response.status === 400) {
        alert("El campo nombre no puede estar vacío.");
      } else if (response.status === 409) {
        alert("Ya existe un juego con ese nombre. Cambia el nombre.");
      } else if (!response.ok) {
        throw new Error("Error al agregar el juego.");
      } else {
        
        alert("Juego agregado exitosamente."); 
        formAgregarJuego.reset(); 
        location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error inesperado. Revisa la consola.");
    }
  });
  