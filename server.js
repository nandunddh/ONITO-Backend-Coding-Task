const express = require("express");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const fileupload = require("express-fileupload");
const path = require("path");


const app = express();
dotenvExpand.expand(dotenv.config());
const mysqlconnection = require("./src/Confg/MysqlDBConnection");



app.use(express.json());
app.use(fileupload({ createParentPath: true }));
app.use(express.static(path.join(__dirname, "public/uploads")));


const PORT = process.env.PORT || 3000;
const SERVER = process.env.SERVER || "";
const MainRoute = require("./src/Routes/index");

app.get("/",(req,res)=>{
    return res.json("welcome");
});

app.use("/api",MainRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on ${SERVER}`);
});