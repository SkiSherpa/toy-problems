// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1: pic on desktop
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// IP: 2 linked list,
// OP: a single list - both list combined into one
// C: the numbers should be in ascending order
// C: one list does NOT have priority

// define pointer for list1 and list2
var mergeTwoLists = function(list1, list2) {
    class ListNode {
        constructor(val, next) {
            this.val = (val===undefined ? 0 : val);
            this.next = (next===undefined ? null : next);
        }
    }
    class LinkedList {
        constructor(head = null) {
            this.head = head
        }
    }
    let onePoint = 0;
    let twoPoint = 0;

    let linkedList = new LinkedList;

    if (list1[onePoint] < list2[twoPoint]) {
        // set list1[0] to head
        new linkedList(list1[onePoint])
        onePoint++;
    } else {
        new linkedList(list2[twoPoint])
        twoPoint++;
    }

    console.log()
    while (list1.length < onePoint && list2.length < twoPoint) {
        if (list1[onePoint] < list2[twoPoint]) {
            new ListNode(list1[onePoint]);
            onePoint++;
        } else {
            new ListNode(list2[twoPoint]);
            twoPoint++;
        }
    }
    return linkedList;
};
console.log(mergeTwoLists([1,2,4], [1,3,4]));

var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};
