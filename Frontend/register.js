
const botonAbrirTerminos=document.getElementById("boton-terminos");
const modal=document.getElementById("modal-terminos");
const modalFondo=document.getElementById("modal-fondo-terminos");
botonAbrirTerminos.addEventListener("click",()=>{
    modalFondo.style.display="block";
    modal.style.display="block";
})

const cerrarModal=document.getElementById("modal-cerrar-boton");
cerrarModal.addEventListener("click",()=>{
    modal.style.display="none";
    modalFondo.style.display="block";

})

const checkTerminos=document.getElementById("check-terminos");
const botonRegistro=document.getElementById("boton-registro");
checkTerminos.addEventListener("change", () => {
    if (checkTerminos.checked) {
        botonRegistro.disabled=false;
        botonRegistro.classList.remove("is-disabled");
    } else {
        botonRegistro.disabled=true;
        botonRegistro.classList.add("is-disabled");
    }
});


const inputEmail=document.getElementById("input-email");
const msgValidacion=document.getElementById("mensaje-validacion-email");

inputEmail.addEventListener("input",()=>{
    msgValidacion.classList.remove("is-hidden")
    if (emailEsValido(inputEmail.value) ){
        msgValidacion.classList.remove("is-danger")
        msgValidacion.classList.add("is-success")
        inputEmail.classList.remove("is-danger")
        inputEmail.classList.add("is-success")
        msgValidacion.textContent= "Email valido"
    }else{
        msgValidacion.classList.remove("is-success")
        msgValidacion.classList.add("is-danger")
        inputEmail.classList.remove("is-success")
        inputEmail.classList.add("is-danger")
        msgValidacion.textContent= "Email invalido"


    }
})

const inputContra=document.getElementById("input-contra");
const msgValidacionContra=document.getElementById("mensaje-validacion-contra");

inputContra.addEventListener("input",()=>{
    msgValidacionContra.classList.remove("is-hidden")
    if (contrasenaEsValida(inputContra.value)){
        msgValidacionContra.classList.remove("is-danger")
        msgValidacionContra.classList.add("is-success")
        inputContra.classList.remove("is-danger")
        inputContra.classList.add("is-success")
        msgValidacionContra.textContent="Contraseña valida"
    }else{
        msgValidacionContra.classList.remove("is-success")
        msgValidacionContra.classList.add("is-danger")
        inputContra.classList.remove("is-success")
        inputContra.classList.add("is-danger")
        msgValidacionContra.textContent="Contraseña invalida"
    }
})




function emailEsValido(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function contrasenaEsValida(contrasena){
    const contrasenaRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return contrasenaRegex.test(contrasena)
}
