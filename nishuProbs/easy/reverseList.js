/**
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
var reverseList = function(head) {

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
console.log(root1, node13);
