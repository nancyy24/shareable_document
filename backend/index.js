// const server = require("socket.io")
import {Server } from "socket.io"
const PORT = 3001

const io = new Server(PORT,{
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET","POST"]
    }
})

io.on("connection", socket => {
    socket.on('get-document',documentId =>{
        const data = "";
        socket.join(documentId);
        socket.emit("load-document",data)

         socket.on("send-changes",delta => {
        // console.log(delta);
        socket.broadcast.to(documentId).emit('receive-changes',delta);
    })
  
    })
   
});