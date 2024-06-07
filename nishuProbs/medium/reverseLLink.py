from typing import Optional
# from typing import ListNode
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    def __str__(self):
        return str(self.val) + (" -> " + str(self.next) if self.next else "")
# IP: head of LList
# OP: new head of LList
# C: solve in place
# create a dummy_head
# loop through the list
    # make current be next for dummy and prev the next

# og 1 > 2 > 3 > 4 > 5
# new: d > 1 | 2 > 1
# d > 2 > 1 ||| the goal: curNode = 3, sec = 2
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        second = head # sec = 1
        curNode = head.next # curNode = 2

        # count = 0
        # print(second)
        # 1 > null,
        second.next = None
        # print(curNode.val, second.val)
        while curNode: # 1s pass - curNode = 2, sec = 1, d.next = 1
            # then 2 > 1
            # print('L', curNode.val, second.val)
            temp = curNode.next
            curNode.next = second # 2 > 1

            if temp is None:
                break

            # print(temp.val)
            # temp.next = None # 3
            # set up for next iter - curNode = 3, sec = 2

            second = curNode
            # second.next = None

            curNode = temp
            # if curNode.val == 5:
            #     print(curNode.val, second.val, )
            # count += 1
            # if count > 6:
            #     print('had to break')
            #     break
        return curNode

node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

t = Solution()
rev = t.reverseList(node1)
print("ans", rev)
