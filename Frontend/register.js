
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

function emailEsValido(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
