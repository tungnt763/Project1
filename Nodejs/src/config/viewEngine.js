import express from "express";

let configViewEngine = (app) => {
    // arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //  cho phép gõ đc logic trong file html như if else, for,...
    app.set("views", "./src/views");
}

module.exports = configViewEngine;