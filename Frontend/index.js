const grilla = document.getElementById("card-grid");

const mostrarJuegos = async () => {
    try {

        const datos = await fetch('http://localhost:3000/api/v1/juegos');
        const juegos = await datos.json();

        juegos.forEach((juego) => {
            const cardHTML = `
        <div class="column is-one-quarter"> 
          <div class="card" >
              <a href="game.html?id=${encodeURIComponent(juego.id)}&nombre=${encodeURIComponent(juego.nombre)}&imagen=${encodeURIComponent(juego.imagen)}&rating=${encodeURIComponent(juego.rating)}&requisitos=${encodeURIComponent(juego.requisitos_minimosGama)}&precio=${encodeURIComponent(juego.precio)}&empresa_desarrolladora=${encodeURIComponent(juego.empresa_desarrolladora)}">


                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${juego.imagen}" alt="${juego.nombre}" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="${juego.imagen}"  />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">${juego.nombre}</p>
                      
                    </div>
                  </div>
                  <div class="content">
                    <label>★ Rating ${juego.rating}</label>
                    <br />
                    <label>${obtenerTextoRequisitos(juego.requisitos_minimosGama)}</label>
                  </div>
                </div>
                
               </a> 
          </div>
        </div>
      `;
            grilla.insertAdjacentHTML("beforeend", cardHTML);
        });
    } catch (error) {
        console.error("Error al obtener juegos:", error);
    }
};

mostrarJuegos();

function obtenerTextoRequisitos(entero) {
    if (entero === 0) {
        return "Requisitos bajos";
    } else if (entero === 1) {
        return "Requisitos medios";
    } else if (entero === 2) {
        return "Requisitos altos";
    } else {
        return "Valor no válido";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const perfil = document.getElementById("perfil");
    const registrarse=document.getElementById("registrarse");
    const ingreso=document.getElementById("ingreso");
    const dinero=document.getElementById("label-dinero");
    const dev=document.getElementById("opciones-dev");
    if (usuario){
        perfil.classList.remove("is-hidden");
        registrarse.classList.add("is-hidden");
        ingreso.classList.add("is-hidden");
        dinero.textContent = "$" + usuario.dinero;
        dinero.classList.remove("is-hidden");
    }
    if (usuario.nombre=="Alvaro"){
        dev.classList.remove("is-hidden");
    }
});