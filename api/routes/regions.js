const express = require("express");
let router = express.Router();
const isDatabaseConnected = require("../middlewares/isDatabaseConnected")
const auth = require("../middlewares/auth")
const {pool} = require("../db_connection")
const clientRealase = require("../middlewares/clientRealase");

router.get("/",isDatabaseConnected,auth,async (req,res,next)=>{
    await pool.query("SELECT * FROM regions;",(err,response)=>{
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).send({
            rowCount:response.rowCount,
            result:response.rows
        });
    })
},clientRealase);

router.get("/:id",isDatabaseConnected,auth,async (req,res,next)=>{
    const id = req.params.id;
    pool.query("SELECT * FROM regions WHERE regionid=$1;",[id],async (err,response)=>{
        if(err) {
            return res.status(404).json(err);
        }
        let result = response.rows[0].carids;
        console.log(result)

        let cars = [];
        result.forEach(async (carId)=> {
           let car = await pool.query("SELECT * from cars WHERE id = $1", [carId]);
            if(car.rowCount > 0){
                cars.push(car.rows[0]);
            }
        });
                return res.status(200).json({
                    rowCount:cars.length,
                    result:cars
                });
        });
},clientRealase);

module.exports = router;