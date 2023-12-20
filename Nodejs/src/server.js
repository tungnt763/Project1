import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWenRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from 'cors';
require('dotenv').config();

let app = express();

// config app
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWenRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// PORT == undefined => port = 6969

app.listen(port, () => {
    // callback functions
    console.log("Backend Nodejs is running on the port: " + port);
});