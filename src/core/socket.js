import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust URL if needed

export const init = () => {
  // Nothing needed yet, but you could handle auth or handshake here
};

export const listenChat = (onResult) => {
  socket.on('chat history', (messages) => {
    onResult(messages);
  });

  socket.on('chat message', (msg) => {
        console.log("socketmsg");
        console.log(msg);
    onResult(msg); // Pass the message directly
  });
};

export const sendMessage = (message) => {
    console.log("message");
    console.log(message);

  socket.emit('chat message', message);
};
