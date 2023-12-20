/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.



Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.


Constraints:

The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA < m
0 <= skipB < n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.


Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// IP: the head of 2 linked lists
// OP: A node - intersection of both lists
// C: return zero if not found

// You verify your at the same node b/c nodeA and nodeB point to the same next node

// set a pointer for listB = 0

// loop through listA
    // IF nodeA.next === nodeB.next && nodeA.val === nodeB.val
        // return nodeA (it should be the same as nodeB )
// once through listA
    // increase bPointer by one
var getIntersectionNode = function(headA, headB) {
    let StartAList = headA;
    while (headB) {
    // console.log("B.val", headB.val, "B.next", headB.next);
        while (headA) {
            console.log("A.val", headA.val, "B.val", headB.val, headB.next);
            if (headA.next === headB.next && headA === headB && headA.val === headB.val) {
                console.log("before return: ", headA.val, headB.val )
                return headB;
            }
            headA = headA.next;
        }
        // reset headA to begining of list
        headA = StartAList;
        headB = headB.next;
    }
    return 0;
};
// my function is returning "undefined" for when there is no intersection, and I can't figure out why

// Someone's sol and chatGPT's when I was trouble shooting:
/*
it keeps looping, more than once, setting to the next node, or when you get the end of the list it resets to the beginning (the truthy headB/headA part).
B/c the lists are different lengths, eventually a will = b.
Since, they're the same you can return either a or b.
The propt at the very begining says to return null, not zero or a string like in the examples. eventually the two list could be null if there is no intersection and that is what is returned
*/
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
        while (a !== b) {
            a = !a ? headB : a.next
            b = !b ? headA : b.next
        }
        return a
}
