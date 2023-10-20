// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.



// Example 1:

// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:

// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 1
// - Row 1: 4
// - Row 2: 1
// - Row 3: 1
// The rows ordered from weakest to strongest are [0,2,3,1].


// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// IP: array of arrays, "mat" & number how many row indecies that will be returned
// OP: an Array, pop by k-number of the weakest rows
// C: values are either 0 or 1

// initialize a weakestRows array
// loop over each row
// IF length of weakestRows === k
    // return weakestRow
// IF the first value is a zero
    // push that index value into weakestRows
    // remove first value
    // change entire rest of rows value to 2's
// otherwise, is one
    // remove first value

// E: IF last number is one in every row
    // return array of indecies counting from 0 to k
 // loop through each row
        // IF last value is a 0
            // AllRowAreOnes = false
    // IF allRowAreOne === true
        // loop through from 0 to k
            // push in each index to strongestRows
var kWeakestRows = function(mat, k) {
    let weakestRows = [];
    let rowLength = mat[0].length;
    let numberOfRows = mat.length;
    console.log(rowLength);
    let strongestRows = [];
    let allRowAreOnes = true;
    // loop through each row
        // IF last value is a 0
            // AllRowAreOnes = false
    // IF allRowAreOne === true
        // loop through from 0 to k
            // push in each index to strongestRows
    for (let a = 0; a < numberOfRows; a++) {
        console.log(mat[a][rowLength - 1]);
        if (mat[a][rowLength - 1] === 0) {
            console.log("HIT");
            allRowAreOnes = false;
            break;
        }
    }
    if (allRowAreOnes) {
        console.log("I should see");
        for (let b = 0; b < k; b++) {
            strongestRows.push(b);
        }
        return strongestRows;
    }

    for (let j = 0; j < rowLength; j++) {
        if (weakestRows.length === k) {
            return weakestRows;
        }
        for (let i = 0; i < mat.length; i++) {
            if (j === rowLength - 1 && i === mat.length -1) {
                // console.log("j, i",  j, i)
                // console.log("1", mat[i], "true", (weakestRows.length), "k-1", k-1);
                // console.log(weakestRows);
                if (mat[i][0] === 1 && weakestRows.length === (k- 1)) {
                    weakestRows.push(i);
                    return weakestRows;
                }
            }
            if (weakestRows.length === k) {
                return weakestRows;
            }
            let first = mat[i].shift();
            console.log(first, "rows: ", mat[i]);
            if (first === 0) {
                weakestRows.push(i);
                let deleteCount = mat[i].length;
                let replacement = [];
                for (let k = 0; k < deleteCount; k++) {
                    replacement.push(2);
                }
                mat[i].splice(0, deleteCount, replacement);
            }
        }
    }
};



mat =
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]
k = 3
mat1 =
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]],

k1 = 2
mat2 =
[[1,1],
 [1,1],
 [1,1],
 [1,1]],
k2 = 2

mat3 = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]
k3 = 1

mat4 =[[1,0],[1,0],[1,0],[1,1]]
k4 = 4
// console.log(kWeakestRows(mat, k)); // [2,0,3]
// console.log(kWeakestRows(mat1, k1)); // [0,2]
// console.log(kWeakestRows(mat2, k2)); //[0,1]
// console.log(kWeakestRows(mat3, k3)); [0]
console.log(kWeakestRows(mat4, k4)); // [0, 1, 2, 3]
