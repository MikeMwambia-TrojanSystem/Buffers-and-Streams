/*
    Readable Streams : - 
These are streams where data is read either from a file or an input string , arrray or any JS primitive
This inherits from stream constructor which in turn inherit from events
How to create readable streams : - 
*/

//First create a stream object
const Stream = require('stream')
const readableStream = new Stream;

//Then implement _read
readableStream._read = ()=>{}


//You can also use the read() option Method 2
const readableStream = new Stream.Readable({
    read() {}
})

//Then push data to it like 
readableStream.push('Hi!')
readableStream.push('Hoooo!')

//Some core modules support streams out of the box
//fs read stream 
let fs = require('fs');
let readFile = fs.createReadStream('__filename');
//Notice the use of events
readFile.on('data',(data)=>{
    console.log('got data',data);
})

readFile.on('end',()=>{
    console.log('Finished reading');
})

/*
Another way to create the read stream is directly from the stream using the read method
like in below
*/
const readable = require('stream');
const { Readable } = require('stream');
const createReadStream = ()=>{
    const data = ['A','B','C','D']
    return new Readable({
        //Invoke read method
        read() {
            //This here refers to the new Readable Instance initiated here
            if(data.length === 0) this.push(null)
            this.push(data.shift())
        }
    })
}

//How to call it
const readable = createReadStream()

//How to consume it
readable.on('data',(data)=>{console.log('got data',data)})
readable.on('end',()=>{console.log('finished reading')})

/*
Readable streams emit buffers by default we can however set encoding to enable the buffers to be decoded
utf8 encoding ensures the streams emits a strings instead 
or setting objectMode to true ensures 
*/
const readable = require('stream');
const { Readable } = require('stream');
const createReadStream = ()=>{
    const data = ['A','B','C','D']
    return new Readable({
        objectMode : true,
        //Invoke read method
        read() {
            //This here refers to the new Readable Instance initiated here
            if(data.length === 0) this.push(null)
            this.push(data.shift())
        }
    })
}

/*
This ensures the stream emits strings and not buffers 
The short hand to the above is 
*/
const { Readable } = require('stream')
const readable = Readable.from(['A','B','C','D'])
readable.on('data',(data)=>{console.log('got data',data)})
readable.on('end',()=>{console.log('finished reading')})

//Contrary to the Readable constructor, the Readable.from utility function sets objectMode to true by default.

