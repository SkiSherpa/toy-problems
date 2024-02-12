/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
// diagonals don't count to be an island, this would be 5 islands:
/*
[1,0,1]
[0,1,0]
[1,0,1]
m = rows
n = cols

Rule for island inside the grid, excluding edges
[i - 1 & i + 1] for rows to be water
[j - 1 & j + 1] for cols to be water

The edge need
top row: (i = 0) for land, i+1 for water
bottom row: (i = m for land i - 1 for water

right col: (j = 0) for land, j + 1
left col: (j = n) for land, j - 1

IF to the right of current is an island move to that cell
OTHERwsie j+1 is water, check cell below
    IF i+1 is an island move to that cell
    OTHERWISE, is water and we have an island make count go up by one
        Then do i-1 to go back to og row, and move to j+1 cell which should be water, set flag to isCurWater = true

*/
var numIslands = function(grid) {
    // determine if first item is water
    let isCurWater = grid[0][0] === "0" ? true : false;
    console.log("false", isCurWater);
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let i = 0;
    let j = 0;
    let islands = 0;
    // loop thro grid
    while (i < rowLen) {
        while (j < colLen) {
            let right = grid[i][j+1];
            if (right === "0") {
                // possible island
                if (grid[i+1][j] === "0") {
                    islands++;
                }
            }
            j++;
        }
        i++
    }
    return islands
};
// Out of time. THis would give me two islands though for the ex below:
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));
//   lets check and see: it gave me zero. I must not of implemented correctly.
