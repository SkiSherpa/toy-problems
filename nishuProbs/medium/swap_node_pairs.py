from typing import Optional
# Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


# Example 1:
# Input: head = [1,2,3,4]
# Output: [2,1,4,3]

# Example 2:
# Input: head = []
# Output: []

# Example 3:
# Input: head = [1]
# Output: [1]


# Constraints:
# The number of nodes in the list is in the range [0, 100].
# 0 <= Node.val <= 100
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# IP: head of a LList
# OP: head of LList, but new order
# C: cannot modify vals of given node
# make dummy head to attach nodes two
# loop through list

    # create helper to swap the pairs
        # given current and next node
        # return LList reorder
    # attach to the current last node in dummy list

class Solution:
    # E: its possible that node2 may not exist
    def switchTwo(self, node1: Optional[ListNode], node2: Optional[ListNode]) -> Optional[ListNode]:
        if node1 is None and node2 is None:
            return None
        if node1 and node2 is None:
            return node1
        node1.next = node2.next
        node2.next = node1
        return node2


    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(1)
        dummy.next = head
        prev = dummy
        cur = head
        while cur and cur.next:
            next = cur.next # 2
            next_next = next.next # 3, needed for reassign at end of iter

            prev.next = self.switchTwo(cur, next)

            prev = cur
            cur = next_next


        return dummy.next

# I needed some help with the reasigning of var in the while
# Also line 44, setting node1.next = node2.next, I had it set to None. I didnt think that switchPairs would have access to the other nodes. But I think its that node2 does have a next Node and that info is passed along
#  t = O(n), where n is the length of the LList
# m = O(1), but with the second fn being called I'm not sure how it works
# it is one
# t = 26ms 96.43% | m = 16.47Mb 73.14%

t = Solution()
# ex1
n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)
n1.next = n2
n2.next = n3
n3.next = n4
print(t.swapPairs(n1))
