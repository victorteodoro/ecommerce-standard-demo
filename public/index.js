$(document).ready(() => {
  var carrousel = document.querySelector("#carrousel");
  var carrito = document.querySelector("#carrousel-images");
  var bolitas = document.querySelector("#bolitas");

  var imagenActual = 0;

  var cantidadImagenes = document.querySelectorAll(".carrousel img").length;

  document.querySelector("button.prev").addEventListener("click", function() {
    if (imagenActual > 0) {
      imagenActual--;
    } else {
      imagenActual = cantidadImagenes - 1;
    }
    carrito.style.transform =
      "translateX(" + -carrousel.offsetWidth * imagenActual + "px)";
  });

  document.querySelector("button.next").addEventListener("click", function() {
    if (imagenActual < cantidadImagenes - 1) {
      imagenActual++;
    } else {
      imagenActual = 0;
    }
    carrito.style.transform =
      "translateX(" + -carrousel.offsetWidth * imagenActual + "px)";
  });

  carrito.addEventListener("transitionend", function() {
    console.log("fin de la transition");
  });
});
