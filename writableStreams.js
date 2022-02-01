/*
Writable Streams : - 
The Writable constructor creates writable streams.
Writable constructor inherits from Stream constructor which inherits from EventsEmmitter constructor
so writable streams are event emmitters
To send data to a writable stream write method is used
*/

//Method 1
const Stream = require('stream')
const writableStream = new Stream.Writable()
//Implement it's _write method
writableStream._write = (chunk,encoding,next)=>{
console.log(chunk.toString())
next()
}

//Method 2
'use strict'
const fs = require('fs')
const writable = fs.createWriteStream('./out')
writable.on('finish',()=>{
    console.log('finished writing')
})
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.write('D\n')
writable.end('nothing more to write')


/*
Creating your own write stream
*/

const { Writable } = require('stream')
const createWriteStream = (data)=>{
    return new Writable({
        write(chuck,enc,next){
            data.push(chuck)
            next()
        }
    })
}
const data = [] //Somewhere to write to
const writable = createWriteStream(data)
writable.on('finish',()=>{ console.log('finished writing',data)})
writable.write('A/n')
writable.write('B/n')
writable.write('C/n')
writable.end('nothing more to write')


/*
From the above function the chunk is in buffer though a string is sent , 
it's first converted to buffer before being parsed to chunk argument
In the example that follow the chunk is kept as a string because of the setting
decodeStrings option which is set to false
*/
const Writable  = require('stream')
const createWriteStream  = (data)=>{
    return new Writable({
        decodeStrings : false,//This will allow only strings or buffers to be written to the stream
        write(chunk,enc,next){
            data.push(chunk)
            next()
        }
    })
}
const data = []
const writable = createWriteStream(data)
writable.on('finish',()=>{
    console.log('finished writing',data)
})
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.write('D\n')
writable.end('nothing more to write')

/*
If you want to support writing string or any other javascript value,
we can instead set the objectMode to true to create an object-mode writable
stream
*/

