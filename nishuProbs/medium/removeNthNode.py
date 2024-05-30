from typing import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# removing node counting from the end
# have two pointers offset by n
# move along until further pointer is at end
# remove target node
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy_head = ListNode(1)
        dummy_head = head
        i = head
        j = head
        delay_count = 0

        # edge case: n = 1 and list is one node
        if j.next == None and i.next == None and  n == 1:
            dummy_head.next = None
            return dummy_head.next

        while j != None:
            # edge case of n = 1, but list longer than 1
            if j.next == None and n == 1 and i == head:
                i.next = None
                return head

            # end condition
            if j.next == None:
                i.next = j
                return head

            j = j.next
            if delay_count >= n:
                i = i.next
            delay_count += 1

class Sol:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        res = ListNode(0, head)
        dummy = res

        # moving head up by n nodes
        for _ in range(n):
            head = head.next

        # head and dummy are offset by n
        # both move up by one node until head reaches None
        while head:
            head = head.next
            dummy = dummy.next

        # when loop terminates, dummy is connected to the  next.next node
        dummy.next = dummy.next.next

        return res.next


# Example usage:
# Create the linked list
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

t = Sol()
# Call the function to remove the 2nd node from the end
new_head = t.removeNthFromEnd(head, 2)

# Print the linked list after removal
while new_head is not None:
    print(new_head.val, end=" ")
    new_head = new_head.next
