/*
Given an array of decimal integers, Rearange the array in
[ Cardinality in order, base_10_numbers in order], by the following rules:

- sort the ints in ascending order by the number of 1's in their binary
- Ele's having the same number of 1's in their binary representations are ordered by increasing decimal val


ex1: [7, 8, 6, 5] = [0111, 1000, 0110, 0101]
1st group items by binary digits = 1: [[1000], [0101, 0110], [0111] ]
The ele's w/ two 1's must now be ordered: [0110, 0101] = [6, 5]
Sort those two ele's in ascending order by value making the final arr:
    [1000, 0101, 0110, 0111] = [8, 5, 6, 7]

*/
