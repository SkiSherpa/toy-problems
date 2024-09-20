# Given the root of a binary tree, return all root-to-leaf paths in any order.
# A leaf is a node with no children.

# Example 1:
# Input: root = [1,2,3,null,5]
# Output: ["1->2->5","1->3"]

# Example 2:
# Input: root = [1]
# Output: ["1"]

# Constraints:
# The number of nodes in the tree is in the range [1, 100].
# -100 <= Node.val <= 100

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# IP: root of bi tree
# OP: a list of paths to a leaf

# make a helper fn to return path


# IF root doesnt have a left or right
    # return root
# create list to hold paths
# If left exists
    # create a tempPath is root to start
    # add
from typing import Optional
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> list[str]:
        paths = []
        def dfs(node, path):
            if not node:
                return
            if path:
                path += "->" + str(node.val)
            else:
                path = str(node.val)

            if not node.left and not node.right:
                paths.append(path)
                return
            dfs(node.right, path)
            dfs(node.left, path)

        dfs(root, "")
        return paths
