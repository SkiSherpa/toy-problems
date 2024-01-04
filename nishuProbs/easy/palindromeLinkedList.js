/*
https://leetcode.com/problems/palindrome-linked-list/

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
// C: list of length 1 is TRUE

// push all vals into an arr, and solve like a normal palindrome

// create an empty arr as "list"
// push current head into list - its the first val
// loop through linkedList
    // push in all vals to "list" arr
// create two pointers, i (front of list) and j (back of list)
// while pointer i < half the length of the "list" plus one
    // if list[i] !== list[j]
        // return false
// return true
var isPalindrome = function(head) {
    if (head === null) {
        // assuming that an empty list is false
        return false;
    }
    let list = [head.val];
    // moving to the next node
    head = head.next;
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    let i = 0;
    let j = list.length - 1;
    while (i < j) {
        if (list[i] !== list[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
};
// t = O(1.5n) ~ O(n), where n is the number of nodes
//  mem = O(n),  the "list" arr will have n values in it,
    // where n is the number of nodes.
    // a few constants to keep track of like i and j

// t = 117ms, 55.95% | m = 79.13MB, 40.75%


/* intiail attempt with a stack - did not work with odd lengths */
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

var _isPalindrome = function(head) {
    // assuming that an empty list is false
    if (head === null) {
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
goes up to test 70/93

*/
