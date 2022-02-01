'use strict'
const net = require('net')
net.createServer(
    (socket)=>{
    
    //From server prints beat every 3 seconds and send to any connected clients for signal
    const interval = setInterval(()=>{
        socket.write('beat')
    },1000)

    //Transform any data comes through the server from the clients connected
    socket.on('data',(data)=>{
        socket.write(data.toString().toUpperCase())
    })
    
    //Detects when the connection to server is dropped
    socket.on('end',()=>{
        clearInterval(interval)
    })
    }
).listen(3000)

