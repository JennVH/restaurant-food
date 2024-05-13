import { Router } from "express";
import { db, sql } from "./utils.js";

export const api = Router()

api.get(`/api/`, async (req, res) => {
    const [query] = await db.query(sql`
    SELECT * FROM employee
    `) 
    res.json(query)
})

