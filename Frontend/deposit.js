import {response} from "express";

const inputMonto= document.getElementById("input-monto");
const botonDepositar= document.getElementById("boton-depositar");



botonDepositar.addEventListener("click", function(){

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    usuario.dinero+=inputMonto.value;
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
})
document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const dinero=document.getElementById("label-dinero-depositar");

    if (usuario){
        dinero.textContent = "$" + usuario.dinero;
    }

});
async function depositar(nuevoDinero){
    fetch(`/api/v1/usuarios/${usuarioId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dinero: dineroNuevo,
        }),
    })
        .then(response => {
            if (response.status === 200) {
                console.log("Monto depositado con exito")
            }
        })
        .then(updatedUsuario => {
            console.log('Usuario updated:', updatedUsuario);
        })
        .catch(error => {
            console.error('Error:', error);
        });





}
