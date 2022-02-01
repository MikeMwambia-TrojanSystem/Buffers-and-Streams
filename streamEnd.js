/*
There are 4 ways for a stream to be inoperative
They include : -
end
close
error
finish
*/
'use strict'
const net = require('net')
const { finished } = require('stream')
net.createServer((socket)=>{
    const interval = setInterval(()=>{
        socket.write('beat')
    },1000)
    socket.on('data',(data)=>{
        socket.write(data.toString().toUpperCase())
    })
    /*
    Notice how we have adopted the finish pattern instead of listening to specific end events
    Finished function provides a utility to detect when the stream ends
    This is the best practice
    */
    finished(socket,(err) =>{
        if(err){
            console.error('there was a socket error',err)
        }
        clearInterval(interval)
    })
}).listen(3000);