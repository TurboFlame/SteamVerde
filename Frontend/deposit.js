

const inputMonto= document.getElementById("input-monto");
const botonDepositar= document.getElementById("boton-depositar");



botonDepositar.addEventListener("click", function(){
    event.preventDefault()

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    usuario.dinero+=parseInt(inputMonto.value);
    depositar(usuario.dinero,usuario.id)
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
})
document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const dinero=document.getElementById("label-dinero-depositar");

    if (usuario){
        dinero.textContent = "$" + usuario.dinero;
    }


});
async function depositar(dineroNuevo,idUsuario){

    const respuesta = fetch(`http://localhost:3000/api/v1/usuarios/${idUsuario}`, {
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
                mensajeDepositoValidacionValido()
            }else if (response.status === 404){
                console.log(response)
                mensajeDepositoValidacionInvalido("No inicio sesion de forma valida")
            }else {
                mensajeDepositoValidacionInvalido("Error durante transaccion")
            }
        })

}
const msgValidacionDeposito = document.getElementById("mensaje-validacion-deposito");
function mensajeDepositoValidacionValido(){
    msgValidacionDeposito.classList.remove("is-hidden");
    msgValidacionDeposito.classList.remove("is-danger");
    msgValidacionDeposito.classList.add("is-primary");
    msgValidacionDeposito.textContent="Transaccion completada!"
}
function mensajeDepositoValidacionInvalido(cadena){
    msgValidacionDeposito.classList.remove("is-hidden");
    msgValidacionDeposito.classList.remove("is-primary");
    msgValidacionDeposito.classList.add("is-danger");
    msgValidacionDeposito.textContent=cadena
}