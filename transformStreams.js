/*
Transform stream are duplex that give the option of transforming the data
that is passing though it.
*/
const { Transform, pipeline } = require('stream')
const transformStream = new Transform()
transformStream._transform = (chunk,enc,callbakc)=>{
    transformStream.push(chunk.toString().toUpperCase())//This is where the tranformation happens
    callbakc()
}

//Pipe readable streams
process.stdin.pipe(transformStream).pipe(process.stdout);

//also
pipeline(process.stdin,transformStream,process.stdout);
