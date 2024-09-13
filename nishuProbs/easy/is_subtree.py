# Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

# A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.



# Example 1:


# Input: root = [3,4,5,1,2], subRoot = [4,1,2]
# Output: true
# Example 2:


# Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
# Output: false


# Constraints:

# The number of nodes in the root tree is in the range [1, 2000].
# The number of nodes in the subRoot tree is in the range [1, 1000].
# -10^4 <= root.val <= 10^4
# -10^4 <= subRoot.val <= 10^4

# Definition for a binary tree node.
from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# build helped fn to loop through whole tree and pass in subRoot
    # IF values dont match return False
    # If you make it to subRoot's children being none, return True
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        def bfs(node, sub_node):
            if not node and not sub_node:
                return True
            if node and not sub_node or not node and sub_node:
                return False
            if node.val != sub_node.val:
                return False

            return bfs(node.left, sub_node.left) and bfs(node.right, sub_node.right)


        if bfs(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    # Other method would be to create an array of each tree
    # join each val you as a string
    # search for if substring exist
    # at least n+m+ substring search, where n and m are the num of node in root and subtree, respectively
    # i think time wise it wouldn't work

root1 = TreeNode(3)
root1.left = TreeNode(4)
root1.right = TreeNode(5)
root1.left.left = TreeNode(1)
root1.left.right = TreeNode(2)

subroot1 = TreeNode(4)
subroot1.left = TreeNode(1)
subroot1.right = TreeNode(2)

t = Solution()
# print(root1)
# print(t.isSubtree(root1, subroot1))

# Root tree: [3,4,5,1,2]
root2 = TreeNode(3)
root2.left = TreeNode(4)
root2.right = TreeNode(5)
root2.left.left = TreeNode(1)
root2.left.right = TreeNode(2)

# Subtree: [4,1,2]
subroot2 = TreeNode(4)
subroot2.left = TreeNode(1)
subroot2.right = TreeNode(2)

# Testing the new case
t = Solution()
print(t.isSubtree(root2, subroot2))  # Expected output: True
#        3
#       / \
#      4   5
#     / \
#    1   2

#      4
#     / \
#    1   2
