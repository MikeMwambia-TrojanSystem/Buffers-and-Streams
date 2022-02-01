let fs = require('fs')
let http = require('http')

let myReadStream = fs.createReadStream(__dirname + '/streams.txt','utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//This method passes data from the read stream to write stream
//Same as above
myReadStream.on('data',function(chunk){
    console.log('new chunk recieved')
    myWriteStream.write(chunk);
})

//This method passes the data from read streams to write stream
//Same as above
myReadStream.pipe(myWriteStream);


/*
The below code is how you read and send the information of a file to the front
This gives more perfomance use of pipe than reading the file and sending it all.
*/
let server = http.createServer(function(req,res){
    console.log('request was made :' + req.url);

    res.writeHead(200,{'Content-Type':'text/plain'});//This serves plain text to browser

    res.writeHead(200,{'Content-Type':'text/html'}); //This serves HTML pages to client

    res.writeHead(200,{'Content-Type':'application/json'}); //This serves JSON to client
    
    let myReadStream = fs.createReadStream(__dirname + '/streams.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now listening to port 3000');
