// Prevent default behavior for clicks on Materiales_Soluciones and Beaker
document.querySelector('.Materiales_Soluciones').addEventListener('click', function(event) {
  event.preventDefault();
});

document.querySelector('.Beaker').addEventListener('click', function(event) {
  event.preventDefault();
});



document.getElementById("Cambia_Solucion").addEventListener("click", function() {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();
    
    if (colorFondo == "#b0ffff") {
      
      document.documentElement.style.setProperty('--color-fondo', "#ffb0b0");
      document.documentElement.style.setProperty('--color-carga', "#ffb0b0");

    }else if(colorFondo == "#e7e8de") {
      document.documentElement.style.setProperty('--color-fondo', "#b81c1c");
      document.documentElement.style.setProperty('--color-carga', colorCarga);

    }else if(colorFondo == "#ffd900") {
        document.documentElement.style.setProperty('--color-fondo', colorFondo);
        document.documentElement.style.setProperty('--color-carga', "#b81c1c");

    }else if(colorFondo == "#ff7300") {
        document.documentElement.style.setProperty('--color-fondo', "#ff5100");
        document.documentElement.style.setProperty('--color-carga', "#b81c1c");
    }else if(colorFondo == "#b81c1c") {
      document.documentElement.style.setProperty('--color-fondo', colorFondo);
      document.documentElement.style.setProperty('--color-carga', "#b81c1c");

    }
});

document.getElementById("Reset").addEventListener("click", function() {

    document.documentElement.style.setProperty('--color-carga', "#e7e8de");
    document.documentElement.style.setProperty('--color-fondo', "#e7e8de");

});

document.getElementById("Agua").addEventListener("click", function() {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();
    
    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
      // Cambiar el color de carga a "#008a9"
      document.documentElement.style.setProperty('--color-fondo', "#b0ffff");
      document.documentElement.style.setProperty('--color-carga', colorCarga);

    }else if(colorFondo == "#b81c1c") {
        
      document.documentElement.style.setProperty('--color-fondo', "#ffb0b0");
      document.documentElement.style.setProperty('--color-carga', "#ffb0b0");

    }
});


document.getElementById("Aceite").addEventListener("click", function() {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();
    
    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
      // Cambiar el color de carga a "#008a9"
      document.documentElement.style.setProperty('--color-fondo', "#ffd900");
      document.documentElement.style.setProperty('--color-carga', colorCarga);

    }else if(colorFondo == "#b81c1c") {
        
      document.documentElement.style.setProperty('--color-fondo', colorFondo);
      document.documentElement.style.setProperty('--color-carga', "#ffd900");
      
    }
});

document.getElementById("Yema").addEventListener("click", function() {
    // Obtener el color de fondo actual
    var colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-fondo').trim();
    
    // Obtener el color de carga actual
    var colorCarga = getComputedStyle(document.documentElement).getPropertyValue('--color-carga').trim();
    
    // Verificar si el color de fondo actual es diferente de "#e7e8de"
    if (colorFondo == "#e7e8de") {
      // Cambiar el color de carga a "#008a9"
      document.documentElement.style.setProperty('--color-fondo', "#ff7300");
      document.documentElement.style.setProperty('--color-carga', colorCarga);

    }else if(colorFondo == "#b81c1c") {
        
      document.documentElement.style.setProperty('--color-fondo', "#b81c1c");
      document.documentElement.style.setProperty('--color-carga', "#ff5100");
      
    }
});