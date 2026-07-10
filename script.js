// Abrir invitación

const botonAbrir = document.getElementById("abrir");
const bienvenida = document.getElementById("bienvenida");
const invitacion = document.getElementById("invitacion");

botonAbrir.addEventListener("click", () => {

    bienvenida.style.display = "none";
    invitacion.style.display = "block";

    const sonidoOlas = document.getElementById("olas");
    const musica = document.getElementById("musica");

    if (sonidoOlas) sonidoOlas.play();
    if (musica) musica.play();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Cuenta regresiva

const fechaEvento = new Date("August 25, 2026 15:00:00").getTime();

setInterval(function () {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("cuenta").innerHTML =
        dias + " días " +
        horas + " horas " +
        minutos + " minutos " +
        segundos + " segundos";

}, 1000);
