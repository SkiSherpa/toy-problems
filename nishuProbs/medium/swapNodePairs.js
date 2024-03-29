/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]


Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
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
//  IP: the head of a linked list
// OP: the head of the same list, but every other node swapped

// loop through the list counting by 2
    // switch the current and the next node
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dummyHead = new ListNode(null);
    // create a fn to add the next two nodes to dummyHead
    function addNextTwo(lastNode, current, nextNode) {
        console.log(lastNode, current, nextNode);
        if (!current && !nextNode) {
            return dummyHead.next;
        }
        if (!nextNode) {
            lastNode.next = current;
            return dummyHead.next;
        }
        // set up the next node for recursive call
        let nextCurrent;
        let nextNextCur;
        // IF on last node
            // nextNode.next === undefined, we want to retrun dummy.next
        if (!nextNode.next) {
            return dummyHead.next;
        } else {
            nextCurrent = nextNode.next;
        }
        // adding next node to last node in dummyHead
        lastNode.next = nextNode;

        // IF odd head length, then next.next === undefined
        // need to attach next Node before here
        if (!nextNode.next.next) {
            return dummyHead.next;
        } else {
            nextNextCur = nextNode.next.next;
        }

        // add secondNode to "nextNode"
        nextNode.next = current;

        return addNextTwo(current, nextCurrent, nextNextCur);
    }
    let curHead = head;
    let nextNodeHead = head.next;
    return addNextTwo(dummyHead, curHead, nextNodeHead);
};


    class ListNode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    const head1 = new ListNode(1);
    const node12 = new ListNode(2);
    const node13 = new ListNode(3);
    const node14 = new ListNode(4);

    head1.next = node12;
    node12.next = node13;
    node13.next = node14;

    console.log(swapPairs(head1), [2,1,4,3]);
