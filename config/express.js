const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
var cors = require('cors');
//const io = new Server(httpServer);
const authServices = require("../api/core/services/auth_services");
//const initRealTime = require("../api/realtime");

const init = {}

init.server = () => {
  app.set('port', process.env.PORT || config.server.port);

  app.use(bodyParser.json({ limit: "50mb" }))
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: '*',
      // Allow follow-up middleware to override this CORS for options
      preflightContinue: true,
    }),
  );

  // io.on("connection", (socket) => {
  //   console.log("We are live and connected");
  //   console.log(socket.id);

  //   const token = socket.handshake.auth.token;
  //   console.log('Auth token', token);

  //   try {
  //     if (!token) {
  //       socket.disconnect(true);
  //     }
  //     authServices.verifyToken(token);
  //     const userId = authServices.decodeToken(" "+token).user_id;
  //     initRealTime.init(socket, userId);
  //   } catch (error) {
  //     console.log('Error', error);
  //     socket.disconnect(true);
  //   }

  // });

  // io.on('disconnect', () => {
  //   console.log('disconnected');
  // });

  httpServer.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`);
  });

  require('../api/routes')(app);

  return app;
}

//init.socket = io;

module.exports = init;