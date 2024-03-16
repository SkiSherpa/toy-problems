/**
 * https://leetcode.com/problems/word-search/
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// IP: mxn matrix of letters, a string - target word
// OP: bool - true if word exists in board
// C: can't repeat cells
// C: only move hor or vert, no diagnals

// save length of target word
// save a cache to store cell position and its letter

// find target letter (all of them)

// fn to search adj cells for next letter - (board, starting cell position, targetWord, next target letter)

    // check adj cells for next letter
        // top
        // right
        // left
        // bottom
        // in each above ^^
            // IF next letter matches - (E)
                // chech adj cell for next next letter
var inAdjCells = function (grid, i, j, word, k) {

    if (k === word.length - 1) {
        // IF i is out of bounds
        if (!grid[i]) {
            return false;
        }
        // if the last letter in grid match target letter
            // return true
            // otherwise return false;
        return grid[i][j] === word[k];
    }

    // if current cell is out of bounds or current letter != target letter
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== word[k]) {
        return false;
    }

    // set current letter to *, to not repeat cells
    let temp = grid[i][j];
    grid[i][j] = '*';

    // check adj cells
    let result = (inAdjCells(grid, i-1, j, word, k+1) ||
                inAdjCells(grid, i+1, j, word, k+1) ||
                inAdjCells(grid, i, j-1, word, k+1) ||
                inAdjCells(grid, i, j+1, word, k+1));

    grid[i][j] = temp;
    return result;
}
var exist = function(board, word) {
    const rowLen = board[0].length;
    const colLen = board.length;
    let k = 0;

    for (let i = 0; i < colLen; i++ ) {
        let row = board[i];
        for (let j = 0; j < rowLen; j++) {
            let cell = row[j];
            let isFound = false;

            if (cell === word[k]) {
                isFound = inAdjCells(board, i, j, word, k);
            }
            if (isFound) {
                return true;
            }
        }
    }
    return false;
};

// t = O(mn), where m and n are the length of rows and cols
// m = o(mn), each cell has a set of new varibale to be ititialized
let board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word2 = "SEE";

let board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word1 = "ABCCED"

let board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word3 = "ABCB"
// console.log(exist(board2, word2), true);
// console.log(exist(board1, word1), true);
console.log(exist(board3, word3), false);

//
