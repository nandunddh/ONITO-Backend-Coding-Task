const express = require("express");
const mysqlconnection = require("../Confg/MysqlDBConnection");

const app = express();

const MoviesRoute = require("./MoviesRoute");



app.use("/v1",MoviesRoute);





module.exports = app;
