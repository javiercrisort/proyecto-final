// script.js

// Obtener todos los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.product button');

// Función que se ejecuta al hacer clic en el botón "Agregar al carrito"
function addToCart(event) {
  const product = event.target.closest('.product');
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;

  // Aquí puedes agregar la lógica para agregar el producto al carrito de compras

  console.log(`Se agregó al carrito: ${productName} - Precio: ${productPrice}`);
}

// Asignar el evento de clic a cada botón "Agregar al carrito"
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
