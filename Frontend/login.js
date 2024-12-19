const botonIngreso = document.getElementById("boton-ingreso");

botonIngreso.addEventListener("click", async () => {
    event.preventDefault()
    await ingresar();
});

async function ingresar() {
    const nombre = document.getElementById("usuario").value;
    const contra = document.getElementById("contra").value;

    const respuesta = await fetch(`http://localhost:3000/api/v1/usuarios/nombre?nombre=${encodeURIComponent(nombre)}&contrasena=${encodeURIComponent(contra)}`);

    if (respuesta.status === 400) {
        mensajeIngresoValidacionInvalido("Faltan parametros");
        return;
    }
    if (respuesta.status === 404) {
        mensajeIngresoValidacionInvalido("Usuario no encontrado");
        return;
    }
    if (respuesta.status === 401) {
        mensajeIngresoValidacionInvalido("Contrasena incorrecta");
        return;
    }
    if (respuesta.status === 200) {
        mensajeIngresoValidacionValido()
        return respuesta;
    }
}

const msgValidacionIngreso = document.getElementById("mensaje-validacion-ingreso");
function mensajeIngresoValidacionValido(){
    msgValidacionIngreso.classList.remove("is-hidden");
    msgValidacionIngreso.classList.remove("is-danger");
    msgValidacionIngreso.classList.add("is-success");
    msgValidacionIngreso.textContent="Ingreso completado!"
}
function mensajeIngresoValidacionInvalido(cadena){
    msgValidacionIngreso.classList.remove("is-hidden");
    msgValidacionIngreso.classList.remove("is-success");
    msgValidacionIngreso.classList.add("is-danger");
    msgValidacionIngreso.textContent=cadena
}


