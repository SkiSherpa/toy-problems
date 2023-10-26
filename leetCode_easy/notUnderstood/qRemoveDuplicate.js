/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Ex1: Input: head = [1,1,2]
Output: [1,2]

Ex2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]


Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

// I'm unclear on how its deleting things from the list? Is it just reseting the next value to the new one?
// Its not removing it from the list just changing where the next one is pointing too...

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
// set cur to the head
//  IF the current val === the next.val
  // set current to cur.next.next
  // otherwise, set current to next
  var deleteDuplicates = function(head) {
    if(head == null || head.next == null)
        return head;
    let cur = head;
    // console.log(cur.val);
    // cur = cur.next;
    // console.log(cur.val);
    // cur = cur.next;
    // console.log(cur.val);
    while (cur.next != null && cur.next != null) {
      if (cur.val == cur.next.val) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    return head;

};
