import pg from 'pg'
const { Pool } = pg


export const pool = new Pool({
    host:"localhost",
    user:"root",
    password:"123",
    database:"traficar",
    port:5432
})