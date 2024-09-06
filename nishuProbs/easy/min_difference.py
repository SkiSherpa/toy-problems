# Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.


# Example 1:
#    4
#   / \
#  2   6
# / \
# 1  3
# Input: root = [4,2,6,1,3]
# Output: 1

# Example 2:
#      1
#     / \
#    0  48
#      /  \
#     12   49
# Input: root = [1,0,48,null,null,12,49]
# Output: 1

# ex3:
# root =[1,null,5,3]
# op: 2
#    1
#     \
#     5
#    /
#   3

# Constraints:
# The number of nodes in the tree is in the range [2, 10^4].
# 0 <= Node.val <= 10^5

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import  Optional
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        self.min_diff = 10**5
        self.prev = None

        def find_diff(node):
            if not node:
                return

            find_diff(node.left)

            if self.prev is not None:
                self.find_diff = min(self.min_diff, node.val - self.prev)

            self.prev = node.val

            find_diff(node.right)

        find_diff(root)
        return self.min_diff

# t = O(n), where n is the number of nodes in the tree
# t = O(h), where h is the height of the tree
