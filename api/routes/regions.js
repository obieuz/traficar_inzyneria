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

router.get("/:id",isDatabaseConnected,auth,(req,res,next)=>{
    const id = req.params.id;
    pool.query("SELECT * FROM regions WHERE region_id=$1;",[id],(err,response)=>{
        if(err) {
            return res.status(404).json(err);
        }
        return res.status(200).send({
            rowCount:response.rowCount,
            result:response.rows
        });
})});

module.exports = router;