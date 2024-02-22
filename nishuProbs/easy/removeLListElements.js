/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []


Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
 */
class ListNode {
    constructor (val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//  IP: the head of LList, a target val
// OP: the LList
// IF LList is empty
    // return head
// create dummy head - ex3
// loop through LList
    // IF current node is target val
        // set previous node to next node
// return the LList
var removeElements = function(head, val) {
    if (head === null) {
        return head;
    }
    const dummyHead = new ListNode('', head);
    let prevNode = dummyHead;
    let curNode = head;
    while (curNode !== null) {
        console.log(dummyHead);
        if (curNode.val === val) {
            if (curNode.next === null) {
                prevNode.next = null;
            } else {
                prevNode.next = curNode.next;
            }
        } else {
            prevNode = curNode;
        }
        curNode = curNode.next;
    }
    return dummyHead.next;
};
// t = O(n), where n is the number of node in the LList
// m = O(1),
// t = 67ms, 75.84%, m = 53.73MB 43.70%

// ex3:
const node31 = new ListNode(7);
const node32 = new ListNode(7);
const node33 = new ListNode(7);
const node34 = new ListNode(7);
node31.next = node32;
node32.next = node33;
node33.next = node34;
console.log(removeElements(node31, 7), ' - ', []);
