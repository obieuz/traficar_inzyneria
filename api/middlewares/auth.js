const {pool} = require("../db_connection");
const {verifyToken} = require("../token_methods");
async function auth(req,res,next) {
    next();
    // let token_string = req.headers["authorization"];
    //
    // if(token_string === undefined) {
    //     return res.status(403).send("You need to provide a token");
    // }
    //
    // let token = await verifyToken(token_string);
    //
    // if(token === null)
    // {
    //     return res.status(403).send("You need to provide a token");
    // }
    //
    // const date = new Date();
    // if(date.getTime()>parseInt(token.expiration_time)) {
    //     return res.status(403).send({error:"Token expired"});
    // }
    //
    // let query = await pool.query("SELECT * from tokens WHERE userid = $1 AND issue_time=$2 AND expiration_time=$3;",[token.userId,token.issue_time,token.expiration_time]);
    // if(query.rowCount === 0){
    //     return res.status(403).send({error:"User not found"});
    // }
    // next();
}
module.exports = auth;