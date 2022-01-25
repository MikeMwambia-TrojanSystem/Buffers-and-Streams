var buf1 , buf2 , buf3 , buf4 

buf1 = Buffer.alloc(10) //Allocate a buffer of size 10

// <Buffer 00 00 00 00 00 00 00 00 00 00 > ---- Buffer of size 10

buf2 = buf1.slice(2,3)

//<Buffer 00>

buf2[0] = 100
// 100 --- Change the value of buff2[0] to 100 which is 
// <Buffer 64>

buf1
//<Buffer 00 00 64 00 00 00 00 00 00 00>

/*
In the above, when we create buf2 by calling buf1.slice(2, 3) this is actually a reference to the third byte in buf1. 
So when we assign buf2[0] to 100, buf1[2] is also updated to the same, because it's the same piece of memory.
*/

buf3 = new Uint8Array(10)
Uint8Array [0,0,0,0,0,0,0,0,0,0]

buf4 = buf3.slice(2,3)
Uint8Array[0]

buf4[0] = 100;
100

buf4
Uint8Array[100]

buf3
Uint8Array[0,0,0,0,0,0,0,0,0,0]

/*
However, using a Uint8Array directly, taking a slice of buf3 to create buf4 creates a copy of the third byte in buf3 instead.
So when buf4[0] is assigned to 100, buf3[2] stays at 0 because each buffer is referred to completely separate memory.
*/