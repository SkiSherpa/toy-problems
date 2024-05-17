# Given a binary tree, find its minimum depth.

# The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

# Note: A leaf is a node with no children.


# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 2

# Example 2:
# Input: root = [2,null,3,null,4,null,5,null,6]
# Output: 5


# Constraints:

# The number of nodes in the tree is in the range [0, 10^5].
# -1000 <= Node.val <= 1000
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# dfs
# IP: a root of bi tree
# OP: an int - shortest length branch

# create a var with big number 100001
# use a helper fn for dfs(node, count)
    # IF no node
        # return
    # add one to the count
    # IF no right and left node
        # return
    # call right and left node with count
# call helper with (root, 1)
# return the count
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        smallest_count = 100001

        def dfs(node, count):
            nonlocal smallest_count
            if not node:
                return
            count += 1
            if node.right == None and node.left == None:
                if count < smallest_count:
                    smallest_count = count
                return
            dfs(node.right, count)
            dfs(node.left, count)

        dfs(root, 0)
        return smallest_count
