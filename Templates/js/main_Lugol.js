
document.querySelector('.Materiales_Soluciones').addEventListener('click', function (event) {
    event.preventDefault();
});

document.querySelector('.Caja_petri').addEventListener('click', function (event) {
    event.preventDefault();
});

document.getElementById("Cambia_Solucion").addEventListener("click", function () {
    
    var Caja = document.getElementById("Caja_petri_img");

    if(Caja.src.endsWith("Imagenes/Caja_petri.png")) {
        Caja.src = "Imagenes/lucol_caja.png";

    }else if(Caja.src.endsWith("Imagenes/Petri_papa.png")){
        Caja.src = "Imagenes/Petri_papa_lugol.png";

    }else if(Caja.src.endsWith("Imagenes/Petri_guisquil.png")){
        Caja.src = "Imagenes/Petri_Guisquul_lugol.png";

    }else if(Caja.src.endsWith("Imagenes/Petri_pepino.png")){
        Caja.src = "Imagenes/Petri_pepino_lugol.png";

    }else if(Caja.src.endsWith("Imagenes/Petri_papel.png")){
        Caja.src = "Imagenes/Petri_papel_lugol.png";
    }

});

document.getElementById("Reset").addEventListener("click", function () {
    
    var Caja = document.getElementById("Caja_petri_img");

    Caja.src = "Imagenes/Caja_petri.png";

});

document.getElementById("Papa").addEventListener("click", function () {

    var Caja = document.getElementById("Caja_petri_img");
    Caja.src = "Imagenes/Petri_papa.png";
});


document.getElementById("Guisquil").addEventListener("click", function () {
    var Caja = document.getElementById("Caja_petri_img");
    Caja.src="Imagenes/Petri_guisquil.png";
});

document.getElementById("Pepino").addEventListener("click", function () {
    var Caja = document.getElementById("Caja_petri_img");
    Caja.src="Imagenes/Petri_pepino.png";
});

document.getElementById("Papel").addEventListener("click", function () {
    var Caja = document.getElementById("Caja_petri_img");
    Caja.src="Imagenes/Petri_papel.png";
});