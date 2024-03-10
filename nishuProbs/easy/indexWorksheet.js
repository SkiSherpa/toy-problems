/*
For all of the following, imagine you are working on an nxm matrix. Here is an example with n=4, m=3

[[0, 1, 2],
 [3, 4, 5]
 [6, 7, 8],
 [9, 0, 1]]

When doing these exercises, please use the variables i (for rows) and j (for columns) indexing. For future problems, you can do the same thing, and hopefully this helps make your practice here more transferable.

For each problem, write an expression or function that solves or answers the question. Copy-paste the code (and the answer it outputs) under each one.

* What is the item in the 2nd row and 3rd column ?
arr[1][2]
* What is the item in the 3rd column and 2nd row?
arr[1][2]
* What is the sum of all values in the matrix?

* What is the sum of all values in the 1st column?
* What is the sum of all values in the 3rd row?
* Verify that the input is in fact an nxm matrix of numbers and report what n and m are
* Are there any negative values in the 2nd row?
* What are the sum of all values in the topmost row?
* What is the product of all values in the bottommost row?
* What is the sum of all values in the rightmost column?
* What is the product of all values in the leftmost column?
* Are there any positive values along the diagonal from top left to bottom right? (If n and m are not the same, then pretend that the larger of the two is equal to the smaller of the two, ignoring the later row(s) or column(s))
* What is the sum of all values along the diagonal from the top right to bottom left?
* Which row has the highest product of all its values?
* Which column has the highest product of all its values?

*/
const t = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [9,0,1]
]


// * What is the item in the 2nd row and 3rd column ?
    // console.log(t[1][2], 5);

// * What is the item in the 3rd column and 2nd row?
    // console.log(t[1][2], 5);

// * What is the sum of all values in the matrix?
    // loop through t
        // loop through each subarray
            // add each item to sum
    let sum = (t) => {
        let total = 0;
        for (let i = 0; i < t.length; i++) {
            for (let j = 0; j < t[i].length; j++) {
                total += t[i][j];
            }
        }
        return total;
    }
    // console.log(sum(t), 0+1+2+3+4+5+6+7+8+9+1);

// * What is the sum of all values in the 1st column?
    // loop through t
        // add first item to sum
    let firstColSum = (t) => {
        let sum = 0;
        for (let i = 0; i < t.length; i++) {
            sum += t[i][0];
        }
        return sum;
    }
    // console.log(firstColSum(t), 0+3+6+9);

// * What is the sum of all values in the 3rd row?
    // loop through 3rd row
        // add each item to sum
    let thirdRowSum = (t) => {
        let sum = 0;
        let thirdRow = t[2];
        for (let i = 0; i < thirdRow.length; i++) {
            sum += thirdRow[i];
        }
        return sum;
    }
    console.log(thirdRowSum(t), 6+7+8);
// * Verify that the input is in fact an nxm matrix of numbers and report what n and m are, n=4, m=3

// * Are there any negative values in the 2nd row?
// * What are the sum of all values in the topmost row?
// * What is the product of all values in the bottommost row?
// * What is the sum of all values in the rightmost column?
// * What is the product of all values in the leftmost column?
// * Are there any positive values along the diagonal from top left to bottom right? (If n and m are not the same, then pretend that the larger of the two is equal to the smaller of the two, ignoring the later row(s) or column(s))
// * What is the sum of all values along the diagonal from the top right to bottom left?
// * Which row has the highest product of all its values?
// * Which column has the highest product of all its values?
