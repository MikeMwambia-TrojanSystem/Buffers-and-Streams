'use strict'

const net = require('net')
const socket = net.connect(3000)

socket.on('data',(data)=>{
    console.log('got data:' , data.toString())
})

socket.write('hello')

setTimeout(()=>{
    socket.write('all done')
    setTimeout(()=>{
        socket.end()//End the connection
    },250)
},3250)


/*
Transform constructor 
The transform constructor inherits from duplex constructor.
Transform streams are duplex streams with an enforcement on the interface ,
to ensure a casual relationship between the reads and writes interfaces
e.g Compression
*/

const { createGzip } = require('zlib')
const transform = createGzip()
transform.on('data',(data)=>{
    console.log('got gzip data',data.toString('base64'))
})
transform.write('first')
setTimeout(()=>{
    transform.end('second')
},500)



/*
Transform
This is how transfor works under the hood
*/

const { Transform } = require('stream')
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

const transform = createTransformStream()
transform.on('data', (data) => {
  console.log('got data:', data)
})
transform.write('A\n')
transform.write('B\n')
transform.write('C\n')
transform.end('nothing more to write')
