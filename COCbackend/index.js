import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./db/index.js";
import { app } from './app.js';

import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 8000;

// 1. Create HTTP server from app
const server = http.createServer(app);

// 2. Setup socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URI, // or your deployed frontend
    methods: ["GET", "POST"],
    credentials: true
  }
});

// 3. Make io accessible inside controllers
app.set('io', io);

// 4. Handle socket connection
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Join specific match room
  socket.on("joinMatchRoom", (matchId) => {
    socket.join(matchId);
    console.log(`User ${socket.id} joined room ${matchId}`);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// 5. Start server after DB connects
connectDB().then(() => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.log("Connection is not established", error);
});
