/**
 * https://leetcode.com/problems/incremental-memory-leak/
You are given two integers memory1 and memory2 representing the available memory in bits on two memory sticks. There is currently a faulty program running that consumes an increasing amount of memory every second.

At the ith second (starting from 1), i bits of memory are allocated to the stick with more available memory (or from the first memory stick if both have the same available memory). If neither stick has at least i bits of available memory, the program crashes.

Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the time (in seconds) when the program crashed and memory1crash and memory2crash are the available bits of memory in the first and second sticks respectively.


Example 1:
Input: memory1 = 2, memory2 = 2
Output: [3,1,0]
Explanation: The memory is allocated as follows:
- At the 1st second, 1 bit of memory is allocated to stick 1. The first stick now has 1 bit of available memory.
- At the 2nd second, 2 bits of memory are allocated to stick 2. The second stick now has 0 bits of available memory.
- At the 3rd second, the program crashes. The sticks have 1 and 0 bits available respectively.

Example 2:
Input: memory1 = 8, memory2 = 11
Output: [6,0,4]
Explanation: The memory is allocated as follows:
- At the 1st second, 1 bit of memory is allocated to stick 2. The second stick now has 10 bit of available memory.
- At the 2nd second, 2 bits of memory are allocated to stick 2. The second stick now has 8 bits of available memory.
- At the 3rd second, 3 bits of memory are allocated to stick 1. The first stick now has 5 bits of available memory.
- At the 4th second, 4 bits of memory are allocated to stick 2. The second stick now has 4 bits of available memory.
- At the 5th second, 5 bits of memory are allocated to stick 1. The first stick now has 0 bits of available memory.
- At the 6th second, the program crashes. The sticks have 0 and 4 bits available respectively.

8 - 3 - 5 = 0 (it should crash on sec 6) = 0 bits left
11 - 1 - 2 - 4 - 6 - crash - it cant subtrack 6, remains 4 bits left
Constraints:

0 <= memory1, memory2 <= 231 - 1
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
// IP is how much memory each stick has
// each sec corrosponds to each amount of mem being used
// IP: two nums
// OP: an array of nums - [num of sec to crash after a stick is < zero, mem left in stick 1, mem left in stick 2]
// constantly keeping track of which stick has more mem
// the one with more is the one you subtract from
// C: stick with more mem you take away from that one

// sec = 1
// loop unitl a stick is less than zero
    // IF 1 has more mem than 2
        // subtrack current sec/mem from 1
    // otherwise,
        // subtrack current sec/mem from 2
    // sec++
// IF 1 or 2 is less than zero
    // set that one to zero
// return [sec, 1, 2]
var memLeak = function(memory1, memory2) {
    let sec = 1;
    while (memory1 >= 0 && memory2 >= 0) {
        if (memory1 >= memory2) {
            if (memory1 - sec < 0) {
                break;
            }
            memory1 -= sec;
        } else {
            if (memory2 - sec < 0) {
                break;
            }
            memory2 -= sec
        }
        sec++;

    }
    if (memory1 < 0) {
        memory1 = 0;
    }
    if (memory2 < 0) {
        memory2 = 0;
    }
    return [sec, memory1, memory2];
};

// t = O(n), n depends on mem1/2, it scales with them
// m = O(1), keeps track of 3 vars that keep being over written

// t = 56ms 80.00% | m = 48.54MB 100% <-- woot! woot!

// ex1
let = mem1 = 2;
let = mem2 = 2
// console.log(memLeak(mem1, mem2), [3,1,0]);
// ex2:
let = m21 = 8
let = m22 = 11
// console.log(memLeak(m21, m22), [6,0,4]);
// Output: [6,0,4]

// console.log(memLeak(9, 6), [5,3,2]); // 7/82
console.log(memLeak(10534, 0), [145,94,0]); // 79/82
