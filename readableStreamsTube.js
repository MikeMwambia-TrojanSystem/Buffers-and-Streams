let fs = require('fs');
let http = require('http')

//let myReadStream = fs.createReadStream(__dirname + '/streams.txt'); Reads content as buffers 
let myReadStream = fs.createReadStream(__dirname + '/streams.txt','utf8');//Reads content as string
myReadStream.on('data',function(chunk){
    console.log('Recieved a chuck ')
    console.log(chunk)
})