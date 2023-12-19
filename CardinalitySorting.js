/* The binary cardinality of a number is the total number of 1's in its binary representation.

For ex: the decimal int 20 (base 10) = 10100 (base 2). There are 2 1's in the binary representation so its binary cardinality is 2.

Given an array of decimal ints, sort it ascending first by binary cardinality, then by deciaml value. Return the resulting array

ex; n = 4, nums = [ 1, 2, 3, 4]
| base 10 | base 2 | cardinality
    1       1           1
    2       10          1
    3       11          2
    4       100         1

sorted ele's with bi card. of 1 are [1, 2, 4].
The return array is [1, 2, 4, 3]

cardinalitySort takes on param of nums an array
*/

// IP: array of nums - base 10 ints
// OP: array of nums - base 10 ints sorted by binary cardinality
// Instead of cardinality use "hamming weight" or "population count"

function cardinalitySort(nums) {

}

console.log(cardinalitySort([1, 2, 3, 4])); // [1, 2, 4, 3]
