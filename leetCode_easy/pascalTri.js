// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

//     [1]
//    [1,1]
//   [1,2,1]
//  [1,3,3,1]
// [1,4,6,4,1]

// Constraints:

// 1 <= numRows <= 30
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// IP: a number - num of rows for triangle
// OP: Array of arrays - with numbers in each arr
// C: valid ip number, numRows >= 1

// Define when numRows == 1 || 2
// results array = [[1], [1,1]]

// Loop through up to numRows - 1, start at i = 2
// inner loop of up to last array's length + 1 = j
// IF current j = 0, push in one
// IF current j = last array's length + 1, push in one
// IF innerArr[j] + innerA
    [1]
   [1,1]
  [1,2,1]
 [1,3,3,1]
[1,4,6,4,1]


var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1],[1, 1]];
    }
    let results = [[1], [1,1]];
    for (let i = 2; i < numRows; i++) {
        let innerArr = [];
        let prevArr = results[results.length - 1];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === prevArr.length) {
                innerArr.push(1);
            } else {
                let sum = prevArr[j] + prevArr[j-1];
                innerArr.push(sum);
            }
        }
        results.push(innerArr);
    }
    return results;
};

console.log(generate(1));
console.log(generate(5));

// writing down iip and op are good
// psudeo code? - yes she's doing that

// nishu said he like the indention

// before you started coding I think you could have asked me more q's
// to stall for time, or
