
var jugaorUno = true;
var JugadorDos = false;
var contador = 0;
var on = false;
var ganador = new Audio();
var audioFondo = new Audio();
var audioStanby = new Audio()
var imagenJugadorUno= new Image();
var imagenJugadorDos = new Image();
var sonidoJugadorUno = new Audio();
var sonidoJugadorDos = new Audio();
var sonidoGandorUno= new Audio();
var sonidoGanadorDos= new Audio();
var grupo1=true;
var grupo2=false;


function start() {
    if (!on) {
        cambiarJugador()
        audioStanby.pause()
        on = true;
        audioFondo.src = "02 - Select Your Fighter - Dan Forden, Chris Braymen, Roy Wilkins.mp3"
        ganador.src = "mortal-kombat-round-one.mp3";
        ganador.play()
        audioFondo.play()
        document.getElementById("bt1").disabled = false; document.getElementById("bt2").disabled = false; document.getElementById("bt3").disabled = false;
        document.getElementById("bt4").disabled = false; document.getElementById("bt5").disabled = false; document.getElementById("bt6").disabled = false;
        document.getElementById("bt7").disabled = false; document.getElementById("bt8").disabled = false; document.getElementById("bt9").disabled = false;
        resetJuego();
    } else {
        standby();
    }
}

function standby() {
    on = false;
    audioFondo.pause()
    audioStanby.src = "01 - Title Theme - Dan Forden, Chris Braymen, Roy Wilkins.mp3"
    audioStanby.play()
    resetJuego();
    document.getElementById("bt1").disabled = true; document.getElementById("bt2").disabled = true; document.getElementById("bt3").disabled = true;
    document.getElementById("bt4").disabled = true; document.getElementById("bt5").disabled = true; document.getElementById("bt6").disabled = true;
    document.getElementById("bt7").disabled = true; document.getElementById("bt8").disabled = true; document.getElementById("bt9").disabled = true;
}

function cambiarJugador(){
    if(grupo1){
        grupo1=false;
        grupo2=true;
        imagenJugadorUno.src="Scorpion.png";
        imagenJugadorDos.src="subzero.gif";
        sonidoJugadorUno.src="mortal-kombat-sorpion.mp3"
        sonidoGandorUno.src="8d82b5_MKD_Scorpion_Wins_Sound_Effect.mp3"
        sonidoJugadorDos.src="subzeroFrezee.mp3"
        sonidoGanadorDos.src="8d82b5_MKD_Sub-Zero_Wins_Sound_Effect.mp3"
    }else{
        imagenJugadorUno.src="LiuKang.png";
        imagenJugadorDos.src="sonyaImagen.png";
        sonidoJugadorUno.src="liu-kang-kick.mp3"
        sonidoGandorUno.src="8d82b5_MK_vs_DCU_Liu_Kang_Wins_Sound_Effect.mp3"
        sonidoJugadorDos.src="8d82b5_Sonya_Attack_Sound_Effect.mp3"
        sonidoGanadorDos.src="8d82b5_MKDA_Sonya_Wins_Sound_Effect.mp3"
        grupo1=true;
        grupo2=false;
    }
}

function cambiarTurno() {
    if (jugaorUno) {
        jugaorUno = false;
        jugadorDos = true;
    } else {
        jugaorUno = true;
        jugadorDos = false;
    }
}

function apretarBoton(value1) {
    if (jugaorUno) {
        document.getElementById(value1).src = imagenJugadorUno.src;
        ganador.src =  sonidoJugadorUno.src;
        ganador.play()
    } else {
        document.getElementById(value1).src =imagenJugadorDos.src;
        ganador.src = sonidoJugadorDos.src;
        ganador.play()
    }
    contador = contador + 1;
    cambiarTurno();
    chequearGanador();
}

function validarBoton(valor1, valor2) {
    var imagen = new Image()
    imagen.src = valor1
    if (document.getElementById(valor2).src == imagen.src) {
        apretarBoton(valor2);
    } else {
        ganador.src = "mortal-kombat-toasty.mp3";
        ganador.play()
    }
}

function botonUno() {
    validarBoton("icono1.png", "img1");
}
function botonDos() {
    validarBoton("icono2.png", "img2");
}
function botonTres() {
    validarBoton("icono3.png", "img3");
}
function botonCuatro() {
    validarBoton("icono4.png", "img4");
}
function botonCinco() {
    validarBoton("icono5.png", "img5");
}
function botonSeis() {
    validarBoton("icono6.png", "img6");
}
function botonSiete() {
    validarBoton("icono7.png", "img7");
}
function botonOcho() {
    validarBoton("icono8.png", "img8");
}
function botonNueve() {
    validarBoton("icono9.png", "img9");
}

function chequearGanador() {
    coincideLinea(document.getElementById("img1").src, document.getElementById("img2").src, document.getElementById("img3").src);
    coincideLinea(document.getElementById("img4").src, document.getElementById("img5").src, document.getElementById("img6").src);
    coincideLinea(document.getElementById("img7").src, document.getElementById("img8").src, document.getElementById("img9").src);
    coincideLinea(document.getElementById("img1").src, document.getElementById("img4").src, document.getElementById("img7").src);
    coincideLinea(document.getElementById("img2").src, document.getElementById("img5").src, document.getElementById("img8").src);
    coincideLinea(document.getElementById("img1").src, document.getElementById("img5").src, document.getElementById("img9").src);
    coincideLinea(document.getElementById("img3").src, document.getElementById("img5").src, document.getElementById("img7").src);
    empate();
}

function coincideLinea(jugada1, jugada2, jugada3) {
    if (jugada1 == jugada2 && jugada2 == jugada3) {
        mostrarGanador();
    }
}
function mostrarGanador() {
    if (jugaorUno) {
        ganador.src = sonidoGanadorDos.src;
        ganador.play()
    } else {
        ganador.src = sonidoGandorUno.src;
        ganador.play()
    }
    resetJuego()
}
function resetJuego() {
    contador = 0;
    document.getElementById("img1").src = "icono1.png"; document.getElementById("img2").src = "icono2.png"; document.getElementById("img3").src = "icono3.png";
    document.getElementById("img4").src = "icono4.png"; document.getElementById("img5").src = "icono5.png"; document.getElementById("img6").src = "icono6.png";
    document.getElementById("img7").src = "icono7.png"; document.getElementById("img8").src = "icono8.png"; document.getElementById("img9").src = "icono9.png";
}

function empate() {
    if (contador == 9) {
        ganador.src = "mortal-kombat-round-two.mp3";
        ganador.play()
        resetJuego();
    }
}

