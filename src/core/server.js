const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

let messages = [];

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Send recent chat history
  socket.emit('chat history', messages.slice(-20));

  socket.on('chat message', (msg) => {
    console.log("msg");
    console.log(msg);

    const newMsg = {
      ...msg,
      created: new Date().toISOString(), // Simple timestamp
      id: Math.random().toString(36).substr(2, 9),
    };
    console.log("newMsg");
    console.log(newMsg);

    messages.push(newMsg);
    io.emit('chat message', newMsg); // broadcast to all
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
