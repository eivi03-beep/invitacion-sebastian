// Abrir invitación

const botonAbrir = document.getElementById("abrir");
const bienvenida = document.getElementById("bienvenida");
const invitacion = document.getElementById("invitacion");


botonAbrir.addEventListener("click", () => {

    bienvenida.style.display = "none";
    invitacion.style.display = "block";


    const sonidoOlas = document.getElementById("olas");
    const musica = document.getElementById("musica");


    sonidoOlas.play();

    musica.play();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

    bienvenida.style.display = "none";
    invitacion.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// Cuenta regresiva

const fechaEvento = new Date("August 25, 2026 15:00:00").getTime();


const contador = setInterval(function(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        /
        1000
    );


    document.getElementById("cuenta").innerHTML =

    dias + " días " +
    horas + " horas " +
    minutos + " minutos " +
    segundos + " segundos";


    if(diferencia < 0){

        clearInterval(contador);

        document.getElementById("cuenta").innerHTML =
        "¡Hoy es el gran día! 🎉";

    }


},1000);
