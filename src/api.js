import { application, Router } from "express";
import { db, sql } from "./utils.js";

export const api = Router()

api.get(`/api/`, async (req, res) => {
    const [query] = await db.query(sql`
    SELECT * FROM employee
    `)
    res.json(query)
})

api.post('/api/pedido', async (req, res) => {
    /** @type {FormData} */
    const form = req.body

    //pedido
    const total = form.get('total')
    const puesto = form.get('id_Puesto')
    const mesa = form.get('id_Mesa')
    const [pedido] = await db.query(sql`
    insert   into pedido (Total, Fecha_Compra, id_Puesto, id_Mesa, Habilitado)
  
    values (${total},  ${new Date()}, ${puesto}, ${mesa}, ${true})   `)

    // orden
    const id_platillos = form.getAll('platillos')
    const platillos = []
    for (const id of id_platillos) {
        const [platillo] = await db.query(sql`
        select * from platillo
        where id_Platillo = ${id}
        `)
        platillos.push(platillo)
    }

    //platillo
    for (const platillo of platillos) {
        const [orden] = await db.query(sql`
        insert  into orden(Precio_Venta, Cantidad, Fecha_Orden, id_Pedido, id_Platillo, Habilitado)
        
        values (${platillo.Precio}, ${1}, ${new Date()}, ${pedido.insertId}, ${platillo.id_Platillo}, ${true})`)
    }


    res.json(pedido)
})


api.get('/api/menu/', async (req, res) => {
    const [query] = await db.query( sql`
    select * from platillo where id_Categoria = 1;
    `)
    res.json(query)
    console.log("-inicia menu");
    console.log(query);
    console.log("-fif menu")

})


api.get('/api/postres', async (req, res) => {
    const [query] = await db.query(sql`
    select * from proyecto.platillo where id_Categoria = 2;
    `)
    res.json(query)
    console.log("-inicia postre");
    console.log(query);
    console.log("-fin menu");
})


api.get('/api/bebidas', async (req, res) => {
    const [query] = await db.query(sql`
    select * from proyecto.platillo where id_Categoria = 3
    `)
    res.json(query)
    console.log("-inicia bedidas");
    console.log(query);
    console.log("-fin bedidas");
})


api.get('/api/bebidas1', async (req, res) => {
    let var_id_Categoria = req.query.name;

    const [query] = await db.query(sql`
    select * from proyecto.platillo where id_Categoria = ${var_id_Categoria}
    `)
    res.json(query)
    console.log("-inicia bedidas");
    console.log(query);
    console.log("-fin bedidas");
})

api.post('/api/bebidas1', async (req, res) => {
    let var_id_Categoria = req.body.name;

    const [query] = await db.query(sql`
    insert into platillo (Nombre_Platillo) values(${var_id_Categoria})
    `)
    res.json(query)
    console.log("-inicia bedidas");
    console.log(query);
    console.log("-fin bedidas");
})

// api.post('/api/pedido', async (req, res) => {
   // /** @type {FormData} */
   // const form = req.body
   // const total = form.get('total')
    //const nombrecliente = form.get('nombre-cliente')
    //const id_Mesa = form.get('numero-mesa')
    //const descripcion = form.get('notas')
    //const [pedido] = await db.query(sql`
    //insert (total, nombrecliente,  id_Mesa, descripcion,  Habilitado)
    //into pedido
    //values (${total},  ${new Date()}, ${nombrecliente}, ${id_Mesa}, ${true} , ${notas})
    //`)
//}) 