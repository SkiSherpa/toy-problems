/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/
/**
 * @param {number[]} height
 * @return {number}
 */
//  IP: array of nums
// OP: a number - max units^2 area

// computing which has the largest base*curHeight


// let len = height.length - 1;
// let largest = 0;
// create start = 0 and end = 1 pointers
// WHILE (start < end)
    // let end = start + 1;
    // WHILE (end <= len)
        // let b = end - start
        // IF height[start] < height[end]
            // let h = height[start]
        // otherwise, let h = height[end]
        // calc cur area
        // IF cur area is bigger than largest
            // largest = cur area
        // end++
    // start++
    var maxArea = function(height) {
        let len = height.length - 1;
        let largest = 0;
        let start = 0;
        let end = 1;
        while (start < end) {
            end = start + 1;
            while (end <= len) {
                let b = end - start;
                let h = height[start] < height[end] ? height[start] : height[end];
                if (b*h > largest) {
                    largest = b*h;
                }
                end++;
            }
            start++
        }
        return largest;
    };
