from typing import Optional, List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# L <= cur
# R > cur
# {# : its occurance}
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        num_occurs = {}
        def bts(cur, num_occurs):
            if cur is None:
                return num_occurs

            if cur.val in num_occurs:
                num_occurs[cur.val] += 1
            else:
                num_occurs[cur.val] = 1

            if cur.left:
                bts(cur.left, num_occurs)
            if cur.right:
                bts(cur.right, num_occurs)
            return num_occurs

        end_occurs = bts(root, num_occurs)

        modes = []
        most = 0
        # to find most occurance count
        for num in end_occurs:
            if end_occurs[num] > most:
                most = end_occurs[num]
        # to add the nums with most occurance
        for num in end_occurs:
            if end_occurs[num] == most:
                modes.append(num)
        return modes

# t = O(n), where n is the larger of either the height of the bi-tree
#  or the number of items in num_occurs
# m = O(n), where n is the number of items in num_occurs

# t = 40ms 89.79%
# m = 18Mb 53.64%

t = Solution()
# ex1
root1 = TreeNode(1)
root1.right = TreeNode(2)
root1.right.left = TreeNode(2)

print(t.findMode(root1))

# ex2
root2 = TreeNode(0)
print(t)
