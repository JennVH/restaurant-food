let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
  const productoExistente = carrito.find(producto => producto.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElement = document.getElementById('total');

  listaCarrito.innerHTML = '';
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}`;
    listaCarrito.appendChild(li);
  });

  totalElement.textContent = total;
}



function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}





function mostrarSeleccion() {
  // Obtener todos los elementos checkbox dentro del div con id "container"
  var checkboxes = document.querySelectorAll('#container input[type="checkbox"]');
  var seleccion = document.getElementById('seleccion');

  // Limpiar el contenido previo de la selección
  seleccion.innerHTML = '';

  // Iterar sobre cada checkbox
  checkboxes.forEach(function(checkbox) {
      // Si el checkbox está marcado, añadir su valor al div de selección
      if (checkbox.checked) {
          seleccion.innerHTML += checkbox.value + '<br>';
      }
  });
}