const express = require("express");
const router = express.Router();
const isDatabaseConnected = require("../middlewares/isDatabaseConnected")
const auth = require("../middlewares/auth")
const {pool} = require("../db_connection")
const {verifyToken} = require("../token_methods");
const clientRealase = require("../middlewares/clientRealase");

//get orderow dla usera
router.get("/user/",isDatabaseConnected,auth,async (req,res,next)=>{
    const userId = await verifyToken(req.headers['authorization']).then(data=>data.userId);

    pool.query("SELECT * from orders WHERE userId = $1",[userId],(err,response)=>{
        if(err)
        {
            return res.status(404).send(err);
        }
        return res.status(200).send({
            rowCount:response.rowCount,
            result:response.rows
        })
    });
},clientRealase);

router.post("/", isDatabaseConnected, auth,async (req,res,next)=>{
    const userId = await verifyToken(req.headers['authorization']).then(data=>data.userId);
    const {carId,begin_localization} = req.body;
    const {begin_latitude,begin_longitude} = begin_localization;
    const date = new Date().getTime().toString();

    let response = await pool.query("SELECT * FROM orders WHERE userId = $1 AND status=true;",[userId]);

    if(response.rowCount>0)
    {
        return res.status(404).send({err:"User has pending order"});
    }

    pool.query("INSERT INTO orders (userid,carid,begin_latitude,begin_longitude,begin_date) VALUES ($1,$2,$3,$4,$5);",[userId, carId,begin_latitude
    ,begin_longitude, date], (err,response)=>{
        if(err){
            return res.status(404).send(err);
        }
        if(response.rowCount !== 1)
        {
            return res.status(404).send({err:"Failed to create order"});
        }
        return res.status(201).send({});

    });
},clientRealase);

router.put("/",isDatabaseConnected,auth,async (req,res,next)=>{
    const {orderId,distance,price_per_km,end_localization} = req.body;
    const {end_latitude,end_longitude} = end_localization;
    const date = new Date().getTime().toString();
    const price = (distance * price_per_km).toFixed(2);

    pool.query("UPDATE orders SET end_latitude = $1, end_longitude = $2, distance=$3, price_per_km=$4,price=$5, end_date=$6,status=false WHERE orderid = $7;",[
        end_latitude,end_longitude, distance, price_per_km, price, date, orderId
    ],(err,response)=>{
       if(err){
           return res.status(404).send(err);
       }
       if(response.rowCount !== 1)
       {
           return res.status(404).send({err:"Failed to end order"})
       }
       return res.status(200).send({});
    });

},clientRealase);

module.exports = router;