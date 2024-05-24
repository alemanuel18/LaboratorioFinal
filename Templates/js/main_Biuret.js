// Prevent default behavior for clicks on Materiales_Soluciones and Beaker
document.querySelector('.Materiales_Soluciones').addEventListener('click', function (event) {
    event.preventDefault();
});

document.querySelector('.Beaker').addEventListener('click', function (event) {
    event.preventDefault();
});



document.getElementById("Cambia_Solucion").addEventListener("click", function () {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    if (colorFondo == "#b0ffff") {

        document.documentElement.style.setProperty('--color-fondo', "#b0e2ff");
        document.documentElement.style.setProperty('--color-carga', "#b0e2ff");

    } else if (colorFondo == "#e7e8de") {
        document.documentElement.style.setProperty('--color-fondo', "#40c5d6");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#f2f5d7") {
        document.documentElement.style.setProperty('--color-fondo', "#cba8e2");
        document.documentElement.style.setProperty('--color-carga', "#cba8e2");

    } else if (colorFondo == "#f9fdd0") {
        document.documentElement.style.setProperty('--color-fondo', "#cba8e2");
        document.documentElement.style.setProperty('--color-carga', "#cba8e2");
    } else if (colorFondo == "#fdffeb") {
        document.documentElement.style.setProperty('--color-fondo', "#b675e2");
        document.documentElement.style.setProperty('--color-carga', "#b675e2");

    }
});

document.getElementById("Reset").addEventListener("click", function () {

    document.documentElement.style.setProperty('--color-carga', "#e7e8de");
    document.documentElement.style.setProperty('--color-fondo', "#e7e8de");

});

document.getElementById("Agua").addEventListener("click", function () {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
        // Cambiar el color de carga a "#008a9"
        document.documentElement.style.setProperty('--color-fondo', "#b0ffff");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#40c5d6") {

        document.documentElement.style.setProperty('--color-fondo', "#b0e2ff");
        document.documentElement.style.setProperty('--color-carga', "#b0e2ff");

    }
});


document.getElementById("Leche_Deslactosada").addEventListener("click", function () {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
        // Cambiar el color de carga a "#008a9"
        document.documentElement.style.setProperty('--color-fondo', "#f2f5d7");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#b81c1c") {

        document.documentElement.style.setProperty('--color-fondo', colorFondo);
        document.documentElement.style.setProperty('--color-carga', "#ffd900");

    }
});

document.getElementById("Leche").addEventListener("click", function () {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
        // Cambiar el color de carga a "#008a9"
        document.documentElement.style.setProperty('--color-fondo', "#f9fdd0");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#b81c1c") {

        document.documentElement.style.setProperty('--color-fondo', "#b81c1c");
        document.documentElement.style.setProperty('--color-carga', "#ff5100");

    }
});

document.getElementById("Clara_huevo").addEventListener("click", function () {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();

    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();

    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
        // Cambiar el color de carga a "#008a9"
        document.documentElement.style.setProperty('--color-fondo', "#fdffeb");
        document.documentElement.style.setProperty('--color-carga', colorCarga);

    } else if (colorFondo == "#b81c1c") {

        document.documentElement.style.setProperty('--color-fondo', "#b81c1c");
        document.documentElement.style.setProperty('--color-carga', "#ff5100");

    }
});