/*
* https://leetcode.com/problems/reshape-the-matrix/

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.



Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]


Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
*/
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// IP: array of arrays, 2 ints
// OP: array of arrays
// C: If you can't make a rxc mat, return original matrix

// need the same number of cells for rxc as there are in mat
// calc number of cells for rxc
// get length of number of items in mat, matRows
// get length of first item, matCols
// IF number of cells of rxc does NOT equal number of cells in mat
    // return mat

// make copy of mat's values
    // place into a single arr
// create newMat array
// loop going up by c count each time
    // create tempArr by slicing off value from copyMat's arr
    // place into newMat array
// return newMat


var matrixReshape = function(mat, r, c) {
    let numRxC = r*c;
    let matRows = mat.length;
    let matCols = mat[0].length;
    let numOfMatCells = matRows * matCols;
    if (numRxC !== numOfMatCells) {
        return mat;
    }

    let copyMat = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            copyMat.push(mat[i][j]);
        }
    }
    let newMat = [];
    for (let i = 0; i < numRxC; i += c) {
        let tempArr = copyMat.slice(i, i+c);
        newMat.push(tempArr);
    }
    return newMat;
};

let mat = [[1,2],[3,4]];
//  r = 1, c = 4
console.log(matrixReshape(mat,1, 4), [[1,2,3,4]]);
// Output: [[1,2,3,4]]
console.log(matrixReshape(mat,2, 4), [[1,2],[3,4]]);

// t = O(n), where n is the number of cells in mat
// m = O(n), where n is the number of cells in mat. tech O(2n);
// t = 70ms 80.08% | m = 52.64MB 98.47%
// Should point out this is my sol, and done in 30 mins. Woot!
