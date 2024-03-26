import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);
serverHttp.listen(2500, () => {
  console.log("Server running at Port: ", 2500);
});

export { io };
