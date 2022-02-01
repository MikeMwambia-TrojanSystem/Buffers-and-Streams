'use strict'

const fs = require('fs')
const readable = fs.createReadStream('./streams.txt');
readable.on('data',(data)=>{
    console.log('got data',data)
})
readable.on('end',()=>{
    console.log('finished reading')
})


/*
Create Readable stream
In the below function the string is converted to buffer first then sent to the readable stream 
then from the readable stream it's converted back to string using UTF8 
The function below also take a highWaterMark option that defaults to 16kb than means is the highest size
*/

const { Readable } = require('stream')
const data = ['some','data','to','read']
const createReadStream = (data) =>{
    return new Readable ({
        encoding : 'utf8',
        read() {
            //This here refers to the new Readable Instance initiated here
            if(data.length === 0) this.push(null)
            this.push(data.shift())
        }
    })
}

//Calling the function
const readableStream = createReadStream(data)
readableStream.on('data',(data)=>{
    console.log('got data', data)
})
readableStream.on('end',()=>{
    console.log('Finished reading')
})
readableStream.read();


/*
Streams without the intention of using buffers
Use objectMode : true
*/

const { Readable } = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true,
    read () {
      if (data.length === 0) this.push(null)
      else this.push(data.pop())
    }
  })
}
const readable = createReadStream()
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })


/*
Readable.from utility method creates streams from iterable data structures,like arrays
*/

const { Readable } = require('stream');
const readable = Readable.from(['some', 'data', 'to', 'read'])
readable.on('data',(data)=>{
    console.log('got data',data)
})
readable.on('end',()=>{
    console.log('finished reading')
})

/*
Conclusion
A read stream is created by creating the Readable constructor which inherits from Stream constructor
which inherits from EventEmitter so readable streams are events emitters methods
To read data you have to use the read method of readable stream
To read form array you use .from of the stream constructor itself
You can invoke the methods using new keyword or use directly as demostrated in examples above
Reference documentation can be found 
https://nodejs.org/dist/latest-v12.x/docs/api/stream.html#stream_stream_readable_from_iterable_options
*/
