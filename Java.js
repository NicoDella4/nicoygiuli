var event;
var click;
function dibujar(event) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var posX = 0;
    var posY = event.clientY-145;
    var chateau = 180;
    var nva = 181;
    var guemes = 320;
    var fincanvas = 500;
    var inicioguemes = 321;
    var prueba = posY>nva;
    console.log(posX, posY);


    if (321<posY){
        open("2SegundaPagina1.html")
    }

    else if(posY<180){
        open("3SegundaPagina1.html")
    }

    else if(inicioguemes<posY<fincanvas){
        open("1SegundaPagina1.html")
    }
}