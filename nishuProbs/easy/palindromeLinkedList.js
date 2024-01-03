/*
Given the head of a singly linked list, return true if it is a
palindrome
 or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false


Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9


Follow up: Could you do it in O(n) time and O(1) space?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// IP: head of a linkedlist
// OP: a bool - true is palindrome
// C: single direction linked list

// use a stack to determine linked list
// stretch goal - create flag for item already removed

// create an empty arr as "stack"
// push current head into stack - its the first val
// loop through list starting with the "next" val
    // IF the current val is NOT the prev val
        // push into stack
    // IF the current val is the same as the prev
        // remove the current val from the stack

// IF the stack length is zero
    // return true
// return false

var isPalindrome = function(head) {
    if (head === null) {
        // assuming that an empty list is false
        return false;
    }
    let stack = [head.val];
    let isLenOne = true;
    // moving to the next node
    head = head.next;
    if (head) {
        isLenOne = false;
    }
    console.log("Before while stack:", stack[stack.length - 1], head);
// when head.val is the num zero, its falsy
    while (head !== null && typeof head.val === "number") {
        console.log("while head.val:", head.val, "stack[stack.length - 1]", stack[stack.length - 1]);
        if (head.val !== stack[stack.length - 1]) {
            stack.push(head.val);
        } else {
            stack.pop();
        }
        head = head.next;
    }
    console.log("59", "stack:", stack, "stack len", stack.length);
    // a linked List of a single node is a palindrome - should return true. according to test 58
    console.log("59 isLenOne", isLenOne);
    if (isLenOne && stack.length === 1) {
        return true;
    }
    if (stack.length === 0) {
        console.log("58?")
        return true;
    }
    return false;
};

/* FAILS IS THE LIST IS ODD!
THIS BREAKS MY CODE [1, 0, 1]
*/
