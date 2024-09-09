# Given the root of a binary tree, return the sum of every tree node's tilt.

# The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if the node does not have a right child.



# Example 1:
#     1
#    / \
#   2   3
# Input: root = [1,2,3]
# Output: 1
# Explanation:
# Tilt of node 2 : |0-0| = 0 (no children)
# Tilt of node 3 : |0-0| = 0 (no children)
# Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
# Sum of every tilt : 0 + 0 + 1 = 1

# Example 2:
#         4
#       /   \
#      2     9
#     / \     \
#    3   5     7

# Input: root = [4,2,9,3,5,null,7]
# Output: 15
# Explanation:
# Tilt of node 3 : |0-0| = 0 (no children)
# Tilt of node 5 : |0-0| = 0 (no children)
# Tilt of node 7 : |0-0| = 0 (no children)
# Tilt of node 2 : |3-5| = 2 (left subtree is just left child, so sum is 3; right subtree is just right child, so sum is 5)
# Tilt of node 9 : |0-7| = 7 (no left child, so sum is 0; right subtree is just right child, so sum is 7)
# Tilt of node 4 : |(3+5+2)-(9+7)| = |10-16| = 6 (left subtree values are 3, 5, and 2, which sums to 10; right subtree values are 9 and 7, which sums to 16)
# Sum of every tilt : 0 + 0 + 0 + 2 + 7 + 6 = 15

# Example 3:
#         21
#        /  \
#       7   14
#      / \   / \
#     1   1 2   2
#    / \ / \
#   3  3

# Input: root = [21,7,14,1,1,2,2,3,3]
# Output: 9
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional
# null is treated as zero value
# helper bfs function
# do a bfs of left side children - bfs of right side children


class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        sum = 0
        def subtree_sum(node):
            if node is None:
                return 0
            return node.val + subtree_sum(node.left) + subtree_sum(node.right)

        def compute_tilt(node):
            if not node:
                return 0
            l = subtree_sum(node.left)
            r = subtree_sum(node.right)

            tilt = abs(l - r)

            return tilt + compute_tilt(node.left) + compute_tilt(node.right)

        return compute_tilt(root)


def insert_level_order(arr, root, i, n):
    if i < n:
        temp = TreeNode(arr[i])
        root = temp

        # Insert left child
        root.left = insert_level_order(arr, root.left, 2 * i + 1, n)

        # Insert right child
        root.right = insert_level_order(arr, root.right, 2 * i + 2, n)

    return root

# Create nodes
root1 = TreeNode(1)
node1 = TreeNode(2)
node2 = TreeNode(3)

# Build the tree
root1.left = node1
root1.right = node2


# Create nodes
root2 = TreeNode(4)
node12 = TreeNode(2)
node22 = TreeNode(9)
node32 = TreeNode(3)
node42 = TreeNode(5)
node72 = TreeNode(7)

# Build the tree
root2.left = node12
root2.right = node22
node12.left = node32
node12.right = node42
node22.right = node72

root3 = TreeNode(21)
node13 = TreeNode(7)
node23 = TreeNode(14)
node33 = TreeNode(1)
node43 = TreeNode(1)
node53 = TreeNode(2)
node63 = TreeNode(2)
node73 = TreeNode(3)
node83 = TreeNode(3)

# Build the tree
root3.left = node13
root3.right = node23
node13.left = node33
node13.right = node43
node23.left = node53
node23.right = node63
node33.left = node73
node33.right = node83

# print(t1)
t = Solution()
# print(t.findTilt(root1), 1)
print(t.findTilt(root2), 15)
print(t.findTilt(root3), 9)
