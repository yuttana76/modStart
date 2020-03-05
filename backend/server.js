
require('dotenv').config()
const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
const https = require('https');
const fs = require('fs');
const server_validation = require('./server_validation');

// Environment checking (SKIP)
server_validation.envChecking().then((rs)=>{
  console.log('Environment checking ' +rs);
}).catch(err => {
  console.error('Environment checking error '+err)
  process.exit(1) 
})

const PORT = process.env.PORT || 8000

app.set("port", PORT);

const onError = error => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof PORT === "string" ? "pipe " + PORT : "port " + PORT;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const onListening = () => {
    const addr = server.address();
    const bind = typeof PORT === "string" ? "pipe " + PORT : "port " + PORT;
    debug("Listening on " + bind);
  };
  
  //Lode global environment
  const dotenv = require('dotenv');
  dotenv.config();

// HTTP
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(PORT,function () {
  console.log("Listening on port http://localhost:%s", server.address().port);
})

// var server = https.createServer(option, app)
// .listen(port,function () {
//   console.log("Listening on port https://localhost:%s", server.address().port);
// })

module.exports = app