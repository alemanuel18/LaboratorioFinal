document.querySelector('.Materiales_Soluciones').addEventListener('click', function (event) {
    event.preventDefault();
});

document.querySelector('.Beaker').addEventListener('click', function (event) {
    event.preventDefault();
});

document.getElementById("Cambia_Solucion").addEventListener("click", function () {
    
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    if (colorFondo == "#b0ffff") {

        document.documentElement.style.setProperty('--color-fondo', "#89e9ed");
        document.documentElement.style.setProperty('--color-carga', "#89e9ed");

    } else if (colorFondo == "#e7e8de") {
        document.documentElement.style.setProperty('--color-fondo', "#62d2da");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#f2f5d7") {
        document.documentElement.style.setProperty('--color-fondo', "#aae4d9");
        document.documentElement.style.setProperty('--color-carga', "#aae4d9");

    } else if (colorFondo == "#f9fdd0") {
        document.documentElement.style.setProperty('--color-fondo', "#aee8d5");
        document.documentElement.style.setProperty('--color-carga', "#aee8d5");

    } else if (colorFondo == "#ff9100") {
        document.documentElement.style.setProperty('--color-fondo', "#a5a764");
        document.documentElement.style.setProperty('--color-carga', "#a5a764");

    }
});

document.getElementById("Reset").addEventListener("click", function () {

    clearTimeout(Reloj);

    document.documentElement.style.setProperty('--color-carga', "#e7e8de");
    document.documentElement.style.setProperty('--color-fondo', "#e7e8de");

    var Tubo = document.getElementById("Tubo");
    Tubo.src = "Imagenes/Tubo.png";

    document.documentElement.style.setProperty('--transparencia-fondo', "1");
    
    document.documentElement.style.setProperty('--transparencia-carga', "1");

});

document.getElementById("Agua").addEventListener("click", function () {
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    if (colorFondo == "#e7e8de") {

        document.documentElement.style.setProperty('--color-fondo', "#b0ffff");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#62d2da") {

        document.documentElement.style.setProperty('--color-fondo', "#89e9ed");
        document.documentElement.style.setProperty('--color-carga', "#89e9ed");

    }
});


document.getElementById("Leche_Deslactosada").addEventListener("click", function () {

    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    if (colorFondo == "#e7e8de") {
        document.documentElement.style.setProperty('--color-fondo', "#f2f5d7");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#62d2da") {

        document.documentElement.style.setProperty('--color-fondo', "#aae4d9");
        document.documentElement.style.setProperty('--color-carga', "#aae4d9");

    }
});

document.getElementById("Leche").addEventListener("click", function () {

    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    if (colorFondo == "#e7e8de") {
        document.documentElement.style.setProperty('--color-fondo', "#f9fdd0");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#62d2da") {

        document.documentElement.style.setProperty('--color-fondo', "#aee8d5");
        document.documentElement.style.setProperty('--color-carga', "#aee8d5");

    }
});


document.getElementById("Jugo_Naranja").addEventListener("click", function () {

    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();


    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();


    if (colorFondo == "#e7e8de") {

        document.documentElement.style.setProperty('--color-fondo', "#ff9100");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#62d2da") {

        document.documentElement.style.setProperty('--color-fondo', "#a5a764");
        document.documentElement.style.setProperty('--color-carga', "#a5a764");

    }
});


document.getElementById("Baño_Maria").addEventListener("click", function () {

    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    var Tubo = document.getElementById("Tubo");
    Tubo.src = "Imagenes/Baño_Maria.png";

    document.documentElement.style.setProperty('--transparencia-fondo', "0");
    
    document.documentElement.style.setProperty('--transparencia-carga', "0");

    Reloj=setTimeout(function(){
        
        Tubo.src = "Imagenes/Tubo.png";

        if (colorFondo == "#89e9ed") {

            document.documentElement.style.setProperty('--color-fondo', "#89e9ed");
            document.documentElement.style.setProperty('--color-carga', "#89e9ed");

            document.documentElement.style.setProperty('--transparencia-fondo', "1");
            document.documentElement.style.setProperty('--transparencia-carga', "1");
    
        } else if (colorFondo == "#e7e8de") {

            document.documentElement.style.setProperty('--color-fondo', "#e7e8de");
            document.documentElement.style.setProperty('--color-carga', "#e7e8de");
            
            document.documentElement.style.setProperty('--transparencia-fondo', "1");
            document.documentElement.style.setProperty('--transparencia-carga', "1");
    
        } else if (colorFondo == "#aae4d9") {

            document.documentElement.style.setProperty('--color-fondo', "#ffae00");
            document.documentElement.style.setProperty('--color-carga', "#f2f5d7");
            
            document.documentElement.style.setProperty('--transparencia-fondo', "1");
            document.documentElement.style.setProperty('--transparencia-carga', "1");
    
        } else if (colorFondo == "#aee8d5") {
            
            document.documentElement.style.setProperty('--color-fondo', "#ffae00");
            document.documentElement.style.setProperty('--color-carga', "#f9fdd0");
            
            document.documentElement.style.setProperty('--transparencia-fondo', "1");
            document.documentElement.style.setProperty('--transparencia-carga', "1");
    
        } else if (colorFondo == "#a5a764") {
            
            document.documentElement.style.setProperty('--color-fondo', "#ffae00");
            document.documentElement.style.setProperty('--color-carga', "#ffae00");
            
            document.documentElement.style.setProperty('--transparencia-fondo', "1");
            document.documentElement.style.setProperty('--transparencia-carga', "1");
    
        }
    }, 4000);

});