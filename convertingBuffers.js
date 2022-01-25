/*
Converting buffers to and from string is an integral part
This in node js is achieved by 
*/

const buffer = Buffer.from('hello world');

//This is achieved by above method
//Buffer.from uses a default utf8 encoding
//Converting to string from buffer
const { StringDecoder } = require('string_decoder')
const frag1 = Buffer.from('f09f', 'hex')
const frag2 = Buffer.from('9180', 'hex')
console.log(frag1.toString()) // prints �
console.log(frag2.toString()) // prints ��
const decoder = new StringDecoder()
console.log(decoder.write(frag1)) // prints nothing
console.log(decoder.write(frag2)) // prints 👀