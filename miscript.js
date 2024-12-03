function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

const lista = document.getElementById("lista");
const mostrar = document.getElementById("mostrar");
const imagen = document.getElementById("imagen");

// Añade un evento al botón "Mostrar"
mostrar.addEventListener("click", () => {
    const opcionSeleccionada = lista.value;

    // Cambia la imagen según la selección
    switch (opcionSeleccionada) {
        case "carro":
            imagen.src = "https://static.vecteezy.com/system/resources/thumbnails/019/057/515/small/sport-car-isolated-on-transparent-background-3d-rendering-illustration-png.png"; // Ruta de la imagen del carro
            imagen.alt = "Imagen de un carro";
            break;
        case "moto":
            imagen.src = "https://static.wixstatic.com/media/b4a6cf_a97449b339a840cb962a976775cda84d~mv2.png/v1/fill/w_709,h_703,al_c,q_90,enc_auto/b4a6cf_a97449b339a840cb962a976775cda84d~mv2.png"; // Ruta de la imagen de la moto
            imagen.alt = "Imagen de una moto";
            break;
        case "bicicleta":
            imagen.src = "https://e7.pngegg.com/pngimages/996/446/png-clipart-trek-bicycle-corporation-mountain-bike-disc-brake-shimano-bikes-bicycle-frame-bicycle.png"; // Ruta de la imagen de la bicicleta
            imagen.alt = "Imagen de una bicicleta";
            break;
        default:
            imagen.src = "";
            break;
    }

    // Muestra la imagen si hay una selección válida
    if (imagen.src) {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
});