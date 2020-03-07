const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/www", express.static(path.join(__dirname, "www/new-age")));

// app.use("/", express.static(path.join(__dirname, "www/coming-soon")));
// app.use("/images",express.static(path.join("backend/images")));
// app.use("/downloadFiles/files",express.static(path.join("backend/downloadFiles/files")));

/*
Config for separate Banckend and Frontend servers
*/
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT,  DELETE, OPTIONS"
    );
    next();
  });

app.use((req, res, next) => {
    // res.sendFile(path.join(__dirname, "www", "index.html"));
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
  module.exports = app;