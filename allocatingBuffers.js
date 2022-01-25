/*
In node JS there are two methods to allocate buffers safe and unsafe methods
In node JS the constrcutor Buffer which is used for all things binary data should 
not be called with new key word

*/

const buffer = Buffer.alloc(10) //Correct way to allocate buffer of certain size

//By default it allocates a buffer of 10 bytes of zero filled buffer

const buffer = Buffer.allocUnsafe(10) //Allocates an unsafe buffer of certain size

//NB : - The key take-away from this section is: if we need to safely create a buffer, use Buffer.alloc.