// 4kyu
// Dave has a network that from time to time fail to deliver the proper 32 bit unsigned integers over the line. He has discovered that the error often fools the normal parity check (even or odd number of bits). Supplementing the parity check he want to count the number of set bits in a given integer.

// However, he must use as few operations as possible since each operation costs a BitCoin. (Yeah, his HAL server hosting center is way too expensive but required by company management!)

// Tests are deigned to time out when the proposed function is to costly.

// Input can safely be assumed to be any valid 32-bit integer.

// Can you help Dave creating a bit counter with lowest possible cost?

// To help you count function body size 'getBodyLength' is provided. Hand it a function and it will return the number of non-whitespace characters.

// The function body (excluding outer curly brackets) of the 'Correct Solution' is 34 non-whitespace characters, of which 15 are shown in the 'Soultion Setup'.

// This mean your solution will have an upper bound of 144 characters :)

// To help you count function body size 'getBodyLength' is provided. Hand it a function and it will return the number of non-whitespace characters.

// BETA NOTE: Can anybody suggest a way to get the full size of the 'Your solution' code? A way to cheat the size limit is to call another function, since I have no intention of parsing the code a simpler solution would be very welcome.

function bitCount(n) {
    var c = 0;
    while (n > 0) {
        if ((n & 1) == 1)// if new lowest bit === 1
            c += 1;
        n = n >> 1; //shift n to shave off lowest bit
    }
    return c;
}