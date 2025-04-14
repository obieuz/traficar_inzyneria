const {pool} = require("../db_connection");

async function isDatabaseConnected(req,res,next) {
    try{
        await pool.connect();
        next();
    }
    catch (e) {
        pool.end();
        return res.status(500).send({error:"Couldnt connect to db"})
    }
}

module.exports = isDatabaseConnected;