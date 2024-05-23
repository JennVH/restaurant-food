

const menú = document.querySelector('#bebidas')


/** @type {{}[]} */
const data = await fetch('/api/menu').then(res => res.json())

data.forEach(platillo => {
    const li = document.createElement("li")
    li.classList.add('li')
    li.innerHTML = /* html */`
    <span>${platillo.Nombre_Platillo}</span> <p>$20</p>
    <img src="img/limonada.jpeg" alt="" width="100px" height="100px">
    <P> 448 ml</P>
    <button onclick="agregarProducto('LIMONADA', 20)"> + </button>
    `
menú.appendChild(li)
})





