/**
 * https://leetcode.com/problems/pascals-triangle-ii/description/cd
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]


Constraints:

0 <= rowIndex <= 33

 * @param {number} rowIndex
 * @return {number[]}
 */
// IP: a number - target rowIndex
// OP: array of nums - values of the target rowIndex

// getNextRow while loop to build next row pass in current row and rowIndex (to constantly minus one)
    // create arr at one length longer that preRow
        // add 1s to beginning and end of newTow
        // loop through to calc remaining rows
            // [0,1,2]
            // [0,1,2,3]

            // [0,1,2,3]
            // [0,1,2,3,4]
        // set prevRow to newRow
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1,1];
    }

    let prevRow = [1,1];
    let newRow = [];
    let curRowNum = 1;

    while (curRowNum < rowIndex) {
        let newRowLen = prevRow.length + 1
        newRow = new Array(newRowLen);
        newRow[0] = 1;
        newRow[newRowLen - 1] = 1;
        for (let i = 1; i < newRowLen - 1; i++) {
            newRow[i] = prevRow[i - 1] + prevRow[i];
        }
        prevRow = newRow;
        curRowNum++;
    }
    return newRow;
};

console.log(getRow(4)); // [1,4,6,4,1]
console.log(getRow(3)); // [1,3,3,1]
// t = O(n), where n is rowIndex number
// m = O(n), where n is scaling with rowIndex number

// t = 64ms 6.69% | m = 49.30MB 14.90%
