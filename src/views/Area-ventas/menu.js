

const menu = document.querySelector("#platillos");
/** @type {{}[]} */
const data = await fetch(`/api/menu/`).then(res =>  res.json());


data.forEach((platillo) => {
  const li = document.createElement("li");
  li.classList.add("li");
  li.innerHTML =/* html */
  ` <span>${platillo.Nombre_Platillo}</span> <p>${platillo.Precio}</p>
  <img src="${platillo.img}" alt="" width="100px" height="100px">
  <P> ${platillo.Descripcion}</P>
    <button onclick="agregarProducto('${platillo.Nombre_Platillo}', ${platillo.Precio})"> + </button>
    `;
    menu.appendChild(li);
  });



  /**@type {{}[]} */
  const postres = await fetch(`/api/postres/`).then(res => res.json());
  const menuPostres = document.querySelector('#postres')

postres.forEach((platillo) => {
  const li = document.createElement('li')
  li.classList.add('li')
  li.innerHTML =  `<span>${platillo.Nombre_Platillo}</span> <p>${platillo.Precio}</p>
  <img src="${platillo.img}" alt="" width="100px" height="100px">
  <P>${platillo.Descripcion}</P>
  <button onclick="agregarProducto('${platillo.Nombre_Platillo}', ${platillo.Precio})"> + </button>`

  menuPostres.appendChild(li)
})




/**@type {{}[]} */
const bebidas = await fetch(`/api/bebidas/`).then(res => res.json());
const menubebidas = document.querySelector('#bebidas')
bebidas.forEach((platillo) => {
 const li = document.createElement('li')
 li.classList.add('li')
    li.innerHTML =  `<span>${platillo.Nombre_Platillo}</span> <p>${platillo.Precio}</p>
    <img src="${platillo.img}" alt="" width="100px" height="100px">
    <P> ${platillo.Descripcion}</P>
    <button onclick="agregarProducto('${platillo.Nombre_Platillo}', ${platillo.Precio})"> + </button>`
    menubebidas.appendChild(li);
})



/**@type {{}[]} */
const FormData = await fetch(`/api/formulario/`).then(res => res.json());
const form = document.querySelector('#pedido-form')

