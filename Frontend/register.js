
const botonAbrir=document.getElementById("boton-terminos");
const modal=document.getElementById("modal-terminos");
const modalFondo=document.getElementById("modal-fondo-terminos");
const cerrarModal=document.getElementById("modal-cerrar-boton");
const checkTerminos=document.getElementById("check-terminos");
const botonRegistro=document.getElementById("boton-registro");
botonAbrir.addEventListener("click",()=>{
    modalFondo.style.display="block";
    modal.style.display="block";
})
cerrarModal.addEventListener("click",()=>{
    modal.style.display="none";
    modalFondo.style.display="block";

})
checkTerminos.addEventListener("change", () => {
    if (checkTerminos.checked) {
        botonRegistro.disabled=false;
        botonRegistro.classList.remove("is-disabled");
    } else {
        botonRegistro.disabled=true;
        botonRegistro.classList.add("is-disabled");
    }
});
