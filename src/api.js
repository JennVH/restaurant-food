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
    const subtotal = form.get('subtotal')
    const puesto = form.get('puesto')
    const mesa = form.get('mesa')
    const [pedido] = await db.query(sql`
    insert (Total, Subtotal, Fecha_Compra, id_Puesto, id_Mesa, Habilitado)
    into pedido
    values (${total}, ${subtotal}, ${new Date()}, ${puesto}, ${mesa}, ${true}`)

    //orden
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
        insert (Precio_Venta, Cantidad, Fecha_Orden, id_Pedido, id_Platillo, Habilitado)
        into orden
        values (${platillo.Precio}, ${1}, ${new Date()}, ${pedido.insertId}, ${platillo.id_Platillo}, ${true})`)
    }


    res.json(pedido)
})


api.get('/api/menu/', async (req, res) => {
    const [query] = await db.query( sql`
    select * from platillo ;
    `)
    res.json(query)
    console.log(query);
})



