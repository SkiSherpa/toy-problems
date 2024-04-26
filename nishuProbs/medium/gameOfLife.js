/**
 * https://leetcode.com/problems/game-of-life/
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]]
Output: [
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]]

Example 2:
Input: board = [
    [1,1],
    [1,0]]
Output: [
    [1,1],
    [1,1]]

Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.

 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// C: has to modify in place
// IP: Array of Arrays - 1s and 0s pop
// OP: Array of Arrays - the next board state

// isChanged =
/* [
    [ false, null],
    [ null, null]
]
*/
// countNeighbors
    // create a liveCount = 0
        // loop through n - check all neigh of current cell
                // IF current n is out of bounds
                    // move to next iteration
                // IF neighbor is a 1
                    // liveCount++

        // IF the current cell is a one
            // IF the liveCount < 2 || liveCount > 3
                // return true
            // IF liveCount === 2 || 3
                // return false
        // Otherwise, current cell is zero
            // IF liveCount equals 3
                // return true
let countNeighbors = function (board, i, j) {
    // top Left, top, top R, L, R, bottom L, bottom, bottom R
    let n = [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]];
    let liveCount = 0;
    for (let k = 0; k < n.length; k++) {
        let cellI = n[k][0];
        let cellJ = n[k][1];
        // I modified if to be in bounds
        if (cellI >= 0 && cellI < board.length && cellJ >= 0 && cellJ < board[0].length) {
            if (board[cellI][cellJ] === 1) {
                liveCount++
            }
        }
    }
    if (board[i][j] === 1) {
        if (liveCount < 2 || liveCount > 3) {
            return true;
        } else {
            return false;
        }
    } else {
        if (liveCount === 3) {
            return true;
        }
    }
}
// make a copy of the nxm board,
    // fill every cell with null
// create an array to check neighbors
// loop through array (i)
    // loop through array (j)
        // call countNeighbors on current cell and assign bool to isChange cell
// loop through board
    // IF same cell in isChanged is true
        // change value to other
var gameOfLife = function(board) {
    // console.log('start', board);
    let isChanged = []
    for (let i = 0; i < board.length; i++) {
        isChanged.push([]);
        for (let j = 0; j < board[i].length; j++) {
            isChanged[i].push(null);
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            isChanged[i][j] = countNeighbors(board, i, j);
        }
    }
    // console.log('ishChanged', isChanged);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (isChanged[i][j]) {
                if (board[i][j] === 1) {
                    board[i][j] = 0;
                } else {
                    board[i][j] = 1
                }
            }
        }
    }
    console.log(board);
};

// t = O(nxm), you go through every cell
// m = O(nxm), I make a copy of the board
// t = 60ms, 27.23% | m = 50.92MB 26.54%

// 1 Any live cell with fewer than two live neighbors dies as if caused by under-population.
// 2 Any live cell with two or three live neighbors lives on to the next generation.
// 3 Any live cell with more than three live neighbors dies, as if by over-population.
// 4 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
let board2 = [
    [1,1],
    [1,0]];
console.log(gameOfLife(board2));
let board1 = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]];
let nextBoard1 = [
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]];
    console.log(gameOfLife(board1));
// // Follow up:
// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
