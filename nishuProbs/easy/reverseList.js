/**
 *
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// IP: head of a linked list
// OP: the list but reverse order
// C: It does not have to be same list?

// init an array to hold list values
// loop through IP list
    // add each value to the front of the array
// create dummy head for newList
// loop through the array
    // create a new node attached to prev node from array vals
// return the new list
var reverseList = function(head) {
    let vals = [];
    let node = head;
    while (node) {
        vals.unshift(node.val);
        node = node.next;
    }
    let dummyHead = new ListNode(1);
    for (let i = 0; i < vals.length; i++) {
        console.log(dummyHead.next);
        if (i === 0) {
            dummyHead.next = new ListNode(vals[i]);
            node = dummyHead.next;
        } else {
            node.next = new ListNode(vals[i]);
            node = node.next;
        }
    }
    return dummyHead.next;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// ex1: [1,2,3,4,5] -> [5, 4, 3, 2, 1]
const root1 = new ListNode(1);
const node12 = new ListNode(2);
const node13 = new ListNode(3);
const node14 = new ListNode(4);
const node15 = new ListNode(5);

root1.next = node12;
node12.next = node13;
node13.next = node14;
node14.next = node15;

// checking for if list looks correct
console.log(reverseList(root1));

// t = O(n), where n is the length of IP list
// m = O(n) ~ O(2n), I make an array of the list length and then another llist.

// t = 54ms 81.80% | m = 52.40MB 10.32%
