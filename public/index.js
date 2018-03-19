$(document).ready(() => {
  const carrousel = document.querySelector('#carrousel');
  const carrito = document.querySelector('#carrousel-images');
  const bolitas = document.querySelector('#bolitas');

  let imagenActual = 0;

  const cantidadImagenes = document.querySelectorAll('.carrousel img').length;

  document.querySelector('button.prev').addEventListener('click', () => {
    if (imagenActual > 0) {
      imagenActual--;
    } else {
      imagenActual = cantidadImagenes - 1;
    }
    carrito.style.transform =
      `translateX(${-carrousel.offsetWidth * imagenActual}px)`;
  });

  document.querySelector('button.next').addEventListener('click', () => {
    if (imagenActual < cantidadImagenes - 1) {
      imagenActual++;
    } else {
      imagenActual = 0;
    }
    carrito.style.transform =
      `translateX(${-carrousel.offsetWidth * imagenActual}px)`;
  });

  carrito.addEventListener('transitionend', () => {
    console.log('fin de la transition');
  });
});
