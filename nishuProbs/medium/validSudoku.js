/**
 * https://leetcode.com/problems/valid-sudoku/
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.


Example 1:


Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

 * @param {character[][]} board
 * @return {boolean}
 */
// IP: array of arrays - populated with strings
// OP: bool - true if starting values follow sudoku rules

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.


// loop through the sub array and confirm that there are unique number in row
    // create a new Set
    // loop through the sub array
        // IF current number exists in the set
            // return false
        // otherwise, add current number to the set

// cols
// loop through positions 0-8
    // create new set
    // loop through the board and check each 0-8 number
        //
    // want to loop through all 0th is in each sub row

// squares
    // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    // look at first 0-2 sub rows
        // look at 0,1,2 indexes,
        // look at 3,4,5 indexes,
        // look at 6,7,8 indexes,
    // look at first 3-5 sub rows
        // look at 0,1,2 indexes,
        // look at 3,4,5 indexes,
        // look at 6,7,8 indexes,
    // look at first 6-8 sub rows
        // look at 0,1,2 indexes,
        // look at 3,4,5 indexes,
        // look at 6,7,8 indexes,
var isValidSudoku = function(board) {
    // check rows
    for (let i = 0; i < board.length; i++) {
        let countedNums = new Set();
        let row = board[i];
        for (let j = 0; j < row.length; j++) {

            let curNum = row[j];

            if (countedNums.has(curNum) && curNum !== ".") {
                return false;
            } else {
                if (curNum !== ".") {
                    countedNums.add(curNum);
                }
            }
        }
    }
    // check cols
    for (let i = 0; i < 9; i++) {
        let countedNums = new Set();
        for (let j = 0; j < board.length; j++) {

            let curNum = board[j][i];

            if (countedNums.has(curNum) && curNum !== ".") {
                console.log('cols hit')
                return false;
            } else {
                if (curNum !== ".") {
                    countedNums.add(curNum);
                }
            }
        }
    }
    // check squares
    function checkSquare (coor) {
        let y = 0;
        let countedNums = new Set();
        for (let i = coor[1]; i < coor[1] + 3; i++) {
            for (let j = coor[0]; j < coor[0] + 3; j++) {
                let row = board[j];
                let curNum = row[i];
                if (countedNums.has(curNum) && curNum !== ".") {
                    return false;
                } else {
                    if (curNum !== ".") {
                        countedNums.add(curNum);
                    }
                }
            }
        }
        return true;
    }

    for (let k = 0; k < 9; k = k + 3) {
        for (let h = 0; h < 9; h = h + 3) {
            let isSquareValid = checkSquare([k,h]);
                if (!isSquareValid) {
                    return false;
                }
        }
    }

    return true;
};

// t = O(1), cause the board is always a 9x9

// 0,0  0,1  0,2
// 1,0  1,1  1,2  -> x, y+3  -> x, y + 6
// 2,0  2,1  2,2

// x+3, y



const single =
[['1', '2', '3']
,['4', '5', '6']
,['7', '8', '1']]
// console.log(isValidSudoku(single), false);

const b498 =
[["1","2",".",".",".",".","6",".","7"]
,[".",".",".",".",".",".",".",".","5"]
,[".",".","9",".","6",".","4",".","."]
,[".","6",".",".",".",".",".",".","."]
,[".",".",".",".","4",".",".","7","."]
,[".",".",".",".",".",".",".",".","."]
,[".",".",".","5",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","2"]
,[".","9",".",".",".",".",".",".","7"]]
console.log(isValidSudoku(b498), false); // last col should fail

const b344 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
// console.log(isValidSudoku(b344), true);


const b457 =
[[".",".",".",".","5",".",".","1","."]
,[".","4",".","3",".",".",".",".","."]
,[".",".",".",".",".","3",".",".","1"]
,["8",".",".",".",".",".",".","2","."]
,[".",".","2",".","7",".",".",".","."]
,[".","1","5",".",".",".",".",".","."]
,[".",".",".",".",".","2",".",".","."]
,[".","2",".","9",".",".",".",".","."]
,[".",".","4",".",".",".",".",".","."]]
// console.log(isValidSudoku(b457), false);

const board4 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board4), true); // true;
const board3 =
[["5","3","(4)",".","7","."]
,["6","(2)","8","1","9","5"]
,["(1","9","(7)",".",".","."]
,[".",".",".",".",".","."]
,["4",".",".",".",".","."]
,["7",".",".",".","2","."]
]
// console.log(isValidSudoku(board3), false);


const board1 =
[["5","3",".","+","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["=",".",".","]]","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8","8",".","7","9"]]
// console.log(isValidSudoku(board1), false);

const board2 =
[["5"]
,["6"]
,["."]
,["8"]
,["4"]
,["8"]
,["."]
,["."]
,["."]]
// console.log(isValidSudoku(board2), false);

 // // 3-5
    //     // i = 3, i < 5
    // // 6-8

    // // loop to handle 0-2, 3-5, 6-8
    //     // loop through each row
    //         // new set
    //         // count 0-2, linked to outer most loop for each row
    // let rowCount = [[0,1,2], [3,4,5], [6,7,8]];
    // for (let i = 0; i < 3; i++) {
    //     let subArrCount = rowCount[i];

    //     console.log(subArrCount);
    //     for (let k = subArrCount[0]; k <= subArrCount[2]; k++) {
    //         // console.log(board[k]);

    //     }
    //     // for (let j = 0; j < 3; j++) {
    //     //     let count = subArrCount[j]
    //     //     // loop through first 3 number of each 0-2 rows

    //     // }
    // }
