const express = require("express");
const mysqlconnection = require("../Confg/MysqlDBConnection");
const { list, newMovie, longestdurationmovies, top_rated_movies} = require("../Controllers/MoviesController");

const route = express.Router();

route.get("/list",list);
route.post("/new-movie",newMovie);
route.get("/longest-duration-movies",longestdurationmovies);

route.get("/top-rated-movies",top_rated_movies);





module.exports = route;