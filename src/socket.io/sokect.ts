import { io } from "./http_server";

io.on("connection", (socket) => {
  console.log(socket.rooms);
  socket.rooms;
});
