const express = require("express");
const router = express.Router();
const { pool } = require("../db_connection");
const {generateToken} = require("../token_methods");
const isDatabaseConnected = require("../middlewares/isDatabaseConnected");

router.post("/token",isDatabaseConnected, (req, res, next) => {
    try {
        const {login, password} = req.body;
        if (login === undefined || password === undefined) {
            res.status(400).send("You forgot either login or password");
        }
        pool.query("SELECT userid FROM users WHERE login = $1 AND password = $2", [login, password], (err, response) => {
            if (err) {
                return res.status(404).send(err);
            }
            if (response.rowCount !== 1) {
                return res.status(404).send({error: "User not found"});
            }
            const {token_string,token}=generateToken(response.rows[0].userid);

            pool.query("SELECT * FROM tokens WHERE userId = $1", [token.userId], (err, response) => {
                if (response.rows.length > 0) {
                    pool.query("DELETE FROM tokens WHERE userId = $1", [token.userId], (err, response) => {
                        if (err && response.rowCount !== 0) {
                            res.status(500).send(err);
                        }
                    })
                }
            });

            pool.query("INSERT INTO tokens (userId,issue_time,expiration_time) VALUES ($1,$2,$3)", [token.userId, token.issue_time, token.expiration_time], (err, response) => {
                if (err) {
                    res.status(500).send(err);
                }
                if (response.rowCount === 1) {
                    res.status(200).send({token: token_string});
                }
            });
        });
    } catch (e) {
        res.status(500).send({error: e});
    }
});

module.exports = router;
