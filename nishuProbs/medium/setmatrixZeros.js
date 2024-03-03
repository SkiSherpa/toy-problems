/**
 * https://leetcode.com/problems/set-matrix-zeroes/
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.


Example 1:
Input: matrix = [[1,1,1],
                 [1,0,1],
                 [1,1,1]]
Output: [[1,0,1],
         [0,0,0],
         [1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],
                 [3,4,5,2],
                 [1,3,1,5]]
Output: [[0,0,0,0],
         [0,4,5,0],
         [0,3,1,0]]


Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-2^31 <= matrix[i][j] <= 2^31 - 1
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// IP: a mxn int matrix
// OP: modifying same matrix - if zeros present, row/col all changed to zeros
// loop through matrix
    // take note of [i,j] index position for zeros
// change [all i's, j] & [i, all j's] to zero - each would be a loop

var setZeroes = function(matrix) {
    let rowLen = matrix[0].length;
    let colLen = matrix.length;
    let zeroColPos = new Set(); // 0,3
    let zeroRowPos = new Set(); // 0
    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (matrix[i][j] === 0) {
                zeroColPos.add(j);
                zeroRowPos.add(i);
            }
        }
    }
    // loop through zeroColPos/zeroRowPos - x2 loops
        // set respective cols/rows to zero
    for (let fixedCol of zeroColPos) {
        for (let jj = 0; jj < colLen; jj++) {
            matrix[jj][fixedCol] = 0;
        }
    }

    for (let fixedRow of zeroRowPos) {
        for (let ii = 0; ii < rowLen; ii++) {
            matrix[fixedRow][ii] = 0
        }
    }
};

// t = O(n), where n is the number of items in the matrix
// m = O(1), you have the sets which at most could be n+m, and some other vars like i,j, ii, and jj

// t =76s, 50.74% | m = 53.08MB 51.06%

// const matrix = [[0,1,2,0],
//                 [3,4,5,2],
//                 [1,3,1,5]];
// setZeroes(matrix);
// console.log("should be differnt", matrix);

const mat1 = [[1,1,1],[1,0,1],[1,1,1]];
console.log(mat1);
setZeroes(mat1);
console.log(mat1);
