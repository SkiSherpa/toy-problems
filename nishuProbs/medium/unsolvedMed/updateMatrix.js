/**
 * https://leetcode.com/problems/01-matrix/
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [
    [0,0,0],
    [0,1,0],
    [1,1,1]
]
Output: [[0,0,0],[0,1,0],[1,2,1]]


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 10^4
1 <= m * n <= 10^4
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
 * @param {number[][]} mat
 * @return {number[][]}
 */
// IP: a m x n matrix - pop with 0s and 1s
// OP: an mxn matrix - with each cell the distance from an IP cell with a zero
// C: if cell is zero - its zero spaces away
// adj zero is one space away

    [1,1,1,0,0],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [0,1,1,1,1]
// helper fn to count depth of nearest zer0
    // pass through a cell, mark it with '*' to not recount results;
let distanceToZero = function(board, i, j, count, visited) {
    if (board[i] === undefined || board[i][j] === undefined || visited.has(`${i},${j}`)) {
        return Infinity;
        // return Math.pow(10, 4) + 1; // 10^4 +1
    }
    if (board[i][j] === 0) {
        return count;
    }
    // board[i][j] = '*';
    visited.add(`${i},${j}`);
    count++;

    // check top,left,bottom,right for zeros
    let top = distanceToZero(board, i-1, j, count, visited);
    let right = distanceToZero(board, i, j+1, count, visited);
    let bottom = distanceToZero(board, i+1, j, count, visited);
    let left = distanceToZero(board, i, j-1, count, visited);


    return Math.min(top, right, bottom, left);
}

// create a copy of mat to return
// loop through mat
    // if current value is a zero
        // place a zero into current cell
    // otherwise,
        // call helpers and save value to place in return matrix

var updateMatrix = function(mat) {
    let copy = mat.slice();
    for (let i = 0; i < mat.length; i++) {
        let row = mat[i];
        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            if (cell === 0) {
                copy[i][j] = 0;
            } else {
                let visited = new Set();
                let distance = distanceToZero(mat, i, j, 0, visited);
                copy[i][j] = distance;
            }
        }
    }
    return copy;
};

// let mat1 = [[0,0,0],[0,1,0],[0,0,0]]
// console.log(updateMatrix(mat1), [[0,0,0],[0,1,0],[0,0,0]]);

let mat2 = [
    [0,0,0],
    [0,1,0],
    [1,1,1]
];
console.log(updateMatrix(mat2), [[0,0,0],[0,1,0],[1,2,1]]);
// board[i][j] = '*'; would have worked if you made a second copy of the board and passed that in for mat, to reset it each time. Just changing the name doesn't reset mat
