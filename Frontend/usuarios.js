document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/usuarios');

        if (!response.ok) {
            throw new Error('Error al obtener los usuarios');
        }
        const usuarios = await response.json();
        const tableBody = document.querySelector('table tbody');

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.tipo_consola}</td>
                <td>${usuario.genero_favorito}</td>
                <td>${usuario.proxima_compra}</td>
                <td>${usuario.dinero}</td>
                <td>
                  <button class="button is-danger" onclick="eliminarUsuario(${usuario.id}, this)">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar las usuarios:', error);
    }
});

function eliminarUsuario(id, boton) {
    fetch(`http://localhost:3000/api/v1/usuarios/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        const fila = boton.closest('tr');
        fila.remove();
      } else {
        console.error('No se pudo eliminar el usuario');
      }
    })
    .catch(error => console.error('Error al eliminar el usuario:', error));
}