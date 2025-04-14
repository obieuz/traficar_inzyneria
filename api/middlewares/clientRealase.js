const { pool } = require("../db_connection");

function clientRealase(req,res,next) {
    pool.release();
}

module.exports = clientRealase;