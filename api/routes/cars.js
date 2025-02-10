let express = require("express");
let router = express.Router();
let {pool} = require("../db_connection");
let auth = require("../middlewares/auth");
let isDatabaseConnected = require("../middlewares/isDatabaseConnected");

router.get("/", isDatabaseConnected, auth,async (req,res,next)=>{
    try{
        let replay = await pool.query("select * from cars;");
        res.status(200).send(replay)
    }
    catch(e){
        return res.status(500).send({"error":"skibidi"})
    }
    finally {
        pool.end();
    }
})

module.exports = router;