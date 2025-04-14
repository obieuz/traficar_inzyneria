let express = require("express");
let router = express.Router();
let {pool} = require("../db_connection");
let auth = require("../middlewares/auth");
let isDatabaseConnected = require("../middlewares/isDatabaseConnected");
let clientRealase = require("../middlewares/clientRealase");
router.get("/", isDatabaseConnected, auth,async (req,res,next)=>{
    try {
        let replay = await pool.query("select * from cars;");
        return res.status(200).send({
            rowCount:replay.rowCount,
            result:replay.rows
        })
    }
            catch(e){
        return res.status(500).send({"error":"skibidi"})
    }
},clientRealase)

module.exports = router;