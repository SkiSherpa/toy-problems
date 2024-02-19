/**
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

[a8,b8,c8,d8,e8,f8,g8,h8]
[a7,b7,c7,d7,e7,f7,g7,h7]
...
[a1,b1,c1,d1,e1,f1,g1,h1]

a1 = black
a8 = white

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Example 1:
Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

Example 2:
Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

Example 3:
Input: coordinates = "c7"
Output: false

Constraints:
coordinates.length == 2
'a' <= coordinates[0] <= 'h'
'1' <= coordinates[1] <= '8'
 * @param {string} coordinates
 * @return {boolean}
 */
// IP: a string - "a-h & 1-8": ex: a1, 3g, 9h
// OP: a bool - true if coor are white, false if black

// the a, c, e, g col,
    // IF odd row
        // its black
    // otherwise, its white
// the other col, b,d,f,h
    // IF odd row
        // its white
    // optherwise its black
var _squareIsWhite = function(coordinates) {
    if (coordinates[0] === 'a' || coordinates[0] === 'c' ||coordinates[0] === 'e' || coordinates[0] === 'g') {
        if (coordinates[1] % 2 === 1) {
            return false;
        } else {
            return true;
        }
    } else {
        if (coordinates[1] % 2 === 1) {
            return true;
        } else {
            return false;
        }
    }
};

// t = O(1), all if checks with no loops or search algos
// m = O(1)
// t = 55ms 37.95% | m = 48.70MB 28.13%

var squareIsWhite = function(coordinates) {
    if (/[aceg]/.test(coordinates[0])) {
        if (coordinates[1] % 2 === 1) {
            return false;
        } else {
            return true;
        }
    } else {
        if (coordinates[1] % 2 === 1) {
            return true;
        } else {
            return false;
        }
    }
};
// The regex is a little faster, than the series of if statements
// t = 43ms 91.96% | m = 48.67 MB, 37.95%
console.log(squareIsWhite('a1'), false);
console.log(squareIsWhite('b5'), true);
