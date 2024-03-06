/**
 * https://leetcode.com/problems/pascals-triangle-ii/description/
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

// 0 = [1]
// 1 = [1,1]
// save previous row
// use prev row to calc next row


var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1,1];
    }

    let row = [1,1];
    // create a new row that is one length longer than argu row
    // [1, ..., 1]
    // take prev row
    // formula to calc which i from argue row
    // loop to cal next values
        // push into arr


    function nextRow(prevRow) {
        let arr = new Array(prevRow.length + 1);
        arr[0] = 1;
        arr[arr.length - 1] = 1;
        for (let i = 1; i < arr.length; i++) {
            let prevIndex = i - 0;
            arr[i] = prevRow[i] + prevRow[prevIndex];
        }
        return arr;
    }
    return nextRow(row);
};

console.log(getRow(4));
