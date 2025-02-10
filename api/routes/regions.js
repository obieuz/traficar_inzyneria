const express = require("express");
let router = express.Router();
const isDatabaseConnected = require("../middlewares/isDatabaseConnected")
const auth = require("../middlewares/auth")
const {pool} = require("../db_connection")

router.get("/",isDatabaseConnected,auth,(req,res,next)=>{
    pool.query("SELECT * FROM regions;",(err,response)=>{
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).send({
            rowCount:response.rowCount,
            result:response.rows
        });
    })
});

module.exports = router;