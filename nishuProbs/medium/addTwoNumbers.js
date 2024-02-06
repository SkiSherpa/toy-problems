/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
loop through l1 and push num to the front -> 342

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]


Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// IP: 2 LList
// OP: a new LList - the sum of l1 and l2 corresponding node values, in reverse order

// create l1Str and l2Str vars
// loop through both llist
        // transform current node number to string
//     add current str num to front of l1Num and l2num

// transform strs -> nums
// add l1Num and l2Num
// transform from number -> string

// create a new llist
// loop through string number from the back
//     create new node for each digit
// return newLList
var addTwoNumbers = function(l1, l2) {
    let l1Str = '';
    let l2Str = '';

    while (l1 || l2) {
        if (l1) {
            console.log('l1.val', l1.val);
            let val1 = JSON.stringify(l1.val)
            l1Str = val1.concat(l1Str);
            l1 = l1.next;
        }
        if (l2) {
            let val2 = JSON.stringify(l2.val)
            l2Str = val2.concat(l2Str);
            l2 = l2.next;
        }

    }
    console.log('stringNums', l1Str, l2Str);
    let num1 = parseInt(l1Str);
    let num2 = parseInt(l2Str);
    console.log('num1 and num2', num1, 'and', num2);
    let strSum = JSON.stringify(num1 + num2);

    let dummyHead = new ListNode();
    let newLList = dummyHead;

    // 807 -> [7, 0, 8]
    for (let i = strSum.length - 1; i >= 0; i--) {
        let curNum = parseInt(strSum[i]);
        let current = new ListNode(curNum);
        newLList.next = current;
        newLList = current;
    }

    return dummyHead.next; // skip the dummt head in the results
};
