THis repo covers buffers and streams in node js
See streams branch for example code and explanation

What is a buffer 

This a section in memory that holds binary data temporarily untill a computer is ready to accept it and process it.

What is Binary Data 

Binary data is a type of data that is represented or displayed in the binary numeral system. 

How computers store information

Computers store information using electricity circuits
These circuits can be either on or off these state of being on or off 
can be represented as true or false , 1 or 0 and this is the smallest information of storage in a computer 
and it's called the bit.
The computer uses the binary number system and humans we use the decimal number system.

Decimal Number system 

The decimal number system has 9 numbers 0,1,2,3,4,5,6,7,8,9
For example in the decimal number system we have different position 

1000s   100s    10s     1s 

From the above 932 can be represented as 9 unders 100s 3 under 10s and 2 under 1s 

Binary Number system 

In binary number system we have two numbers 0 and 1 which represent wires whose state is either on or off

In binary we also have positions we have  position that each we mutiply by 2 depending on the number of wires 
for example for 4 wires we can store between 0 and 8
We have the following : - 

8s 4s 2s 1s 

for with 8 wires you can store from 0 to 255 

256  128 64 32 16 8 4 2 1

with binary number system you can represent any number 

To represent letters you assign letters to numbers and represent each paragraph as a sequence of numbers.

From the above the number 9 in binary is 

1001 to calculate you have  (8*1) + (4*0) + (2*0) + (1*1)

Any number can be represented by a bunch of 0 & 1 in binary e.g 99 would be 10011001 

This is a representation of binary in one wire of circuit 
so the more wires you have the more you can store

Reference https://www.youtube.com/watch?v=USCBCmwMCDA 

In Node JS binary data is handled by use of buffer constructor 

In Node JS buffer constructor is global so there's no need to require it in a module

The Buffer Instance : - 

When the Buffer constructor was first introduced into Node.js the JavaScript language did not have a native binary type. 
As the language evolved the ArrayBuffer and a variety of Typed Arrays were introduced to provide different "views" of a buffer. 
For instance an ArrayBuffer instance be accessed with a Float64Array where each set of 8 bytes is interpreted as a 64-bit floating point number,
or an Int32Array where each 4 bytes represents a 32bit, 
two's complement signed integer or a Uint8Array where each byte represents an unsigned integer between 0-255.

When these new data structures were added to Javascript , the Buffer constructor internals were refactored on Uint8Array typed.
So a buffer object is both an instance of Buffer and an instance (at the second degree) of Uint8Array
