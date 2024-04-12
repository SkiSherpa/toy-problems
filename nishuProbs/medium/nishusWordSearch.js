/**
 * https://leetcode.com/problems/word-search/description/
 // Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// IP: nxm matrix, a target word
// OP: bool - true if the target word exists in the board

// 1. finding the first target letter
// 2. IF next letter is in an adj cell
    // make sure you don't go back to the past letter
        // pass in i and j positions you can not go to
    // check current letters adj cells
    // otherwise, none of the letters match and we return

// 3.
// board = [["A","B","C","E"],
//          ["S","F","C","S"],
//          ["A","D","E","E"]]

// word = "SEECCE"


// progress[i][j][k] = {
//     If there is a path that ends at point (i, j) in <board>
//     that hits exactly the first k+1 letters of <word>
// }

// progress[i][j][0]  = [[0,0,0,0],
//                       [1,0,0,1],
//                       [0,0,0,0]]
// --> start the v-set and make copy
    // then continue down new path
// progress[i][j][1]  = [[0,0,0,1],
//                       [0,0,0,0],
//                       [0,0,0,1]]

// progress[i][j][k] = 0 if board[i][j] != word[k]
// progress[i][j][k] = 0 if board[i][j] != word[k]
//                     0 if none of progress[i-1][j][k-1], progress[i+1][j][k-1], progress[i][j-1][k-1], progress[i][j+1][k-1] are 1
//                     else 1
// add a cache for visited cells for ^^, v
// progress[i][j][k][v]



const wordSearch = function (board, word) {

}

let  board1 = [
    ["A","B","C","E"],
    ["S","F","C","E"],[
    "A","D","E","E"]];
let word1 = "ABCCED"
// Output: true

let  board2 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]];
let word2 = "SEE"
// Output: true

console.log(wordSearch(board2, word2));
let  board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word3 = "ABCB"
// Output: falet lse
