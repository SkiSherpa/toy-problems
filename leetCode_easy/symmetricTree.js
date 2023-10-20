// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


// Example 1:
//          1
//      2   |   2
//    3   4 | 4   3

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
//          1
//      2   |   2
//    n   3 | n   3

// Input: root = [1,2,2,null,3,null,3]
// Output: false


// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//  IP: The root of A binary Tree - an array of numbers
// OP: Boo - true if tree is a mirror image
// C: all values are numbers - assume

// IF the numbers at root[1] !== root[2]
// return false
// set level = 3, count = 4
// slice the first half of nums
// slice the back half
// IF first half !== back half
// return false

// IF there are more num in root, count*2
// do the slice and compare again

// at level 3, row of 4  - start at level 3, go four
// leve 4, row of 8
// 5, 16

// [5,6] [7, 8] | [8, 7] [6, 5]
var isSymmetric = function(root) {
    if (root.length === 1) {
        return true;
    }
    if (root.length === 2) {
        return false;
    }
    if (root[1] !== root[2]) {
        return false;
    }
    let countLength = 4;
    let countStart = 3;
    // remove the first 3 values from root
    console.log(root.length);
    while (countStart + countLength < root.length + 1) {
        let newArr = root.slice(countStart, countStart + countLength);
        let f = 0;
        let b = newArr.length - 1;
        while (f < ((newArr.length - 1) / 2)) {
            console.log(newArr[f], newArr[b]);
            if (newArr[f] !== newArr[b]) {
                return false
            }
            f++;
            b--;
        }
        countStart += countLength;
        countLength *= 2;
        console.log(countStart + countLength, countStart, countLength);
    }

    return true;
};

// console.log(isSymmetric([1,2,2,3,4,4,3])); // true
// console.log(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5])); //true
console.log(isSymmetric([1,2,2,null,4,null,4])); // false
