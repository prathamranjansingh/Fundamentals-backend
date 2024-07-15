import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
const port = 3000;

const app = express();

const server = new createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.use(cors());
app.get("/", (res, req) => {
  res.send("hello world");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log("ID", socket.id);
  socket.emit("welcome", `Welcome to the server ${socket.id}`);
});

server.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
