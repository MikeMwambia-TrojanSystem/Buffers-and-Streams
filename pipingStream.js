'use strict'
const net = require('net')
const socket = net.connect(3000)

socket.pipe(process.stdout)

socket.write('hello')
setTimeout(() => {
  socket.write('all done')
  setTimeout(() => {
    socket.end()
  }, 250)
}, 3250)


/*
Chaining streams
Since pipe returns the stream passed to it, it is possible chain pipe calls together: streamA.pipe(streamB).pipe(streamC). 
This is a commonly observed practice, but it's also bad practice to create pipelines this way. 
If a stream in the middle fails or closes for any reason, the other streams in the pipeline will not automatically close. 
This can create severe memory leaks and other bugs. 
The correct way to pipe multiple streams is to use the stream.pipeline utility function.
*/

'use strict'
const net = require('net')
const { Transform, pipeline } = require('stream')
const { scrypt } = require('crypto')
const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'hex',
    transform (chunk, enc, next) {
      scrypt(chunk, 'a-salt', 32, (err, key) => {
        if (err) {
          next(err)
          return
          }
        next(null, key)
      })
    }
  })
}

net.createServer((socket) => {
  const transform = createTransformStream()
  const interval = setInterval(() => {
    socket.write('beat')
  }, 1000)
  pipeline(socket, transform, socket, (err) => {
    if (err) {
      console.error('there was a socket error', err)
    }
    clearInterval(interval)
  })
}).listen(3000)