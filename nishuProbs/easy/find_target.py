# Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

# Example 1:
# Input: root = [5,3,6,2,4,null,7], k = 9
# Output: true

# Example 2:
# Input: root = [5,3,6,2,4,null,7], k = 28
# Output: false

# Constraints:
# The number of nodes in the tree is in the range [1, 104].
# -10^4 <= Node.val <= 10^4
# root is guaranteed to be a valid binary search tree.
# -10^5 <= k <= 10^5

# Definition for a binary tree node.
from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        if not root:
            return False

        def bts(node, target):
            if not node:
                return False
            print(node.val, target)
            if node.val == target:
                return True

            if node.val < target:
                return bts(root.left, target)
            else:
                return bts(root.right, target)


        target = k - root.val
        print(target)
        if root.val < target:
            return bts(root.left, target)
        else:
            return bts(root.right, target)
t = Solution()
# ex1:
root1 = TreeNode(5)
root1.left = TreeNode(3)
root1.right = TreeNode(6)
root1.left.left = TreeNode(2)
root1.left.right = TreeNode(4)
root1.right.right = TreeNode(7)
    #     5
    #    / \
    #   3   6
    #  / \   \
    # 2   4   7

print(t.findTarget(root1, 9), True)
# print(t.findTarget([5,3,6,2,4,None,7], 28), False)
root255 = TreeNode(1)
# print(t.findTarget(root255, 2), False)
class Sol:
    def findTarget(root, k):
        def dfs(node, seen):
            if not node:
                return False

            # Check if the complement exists in the set
            if k - node.val in seen:
                return True

            # Add the current node's value to the set
            seen.add(node.val)

            # Continue DFS in both left and right subtrees
            return dfs(node.left, seen) or dfs(node.right, seen)

        # Start DFS with an empty set to store seen values
        return dfs(root, set())

p = Sol()
# t = O(n), where n is the number of nodes
# m = O(h), where h is the hieght of the tree


print(p.findTarget(root1, 9), True)
# print(t.findTarget([5,3,6,2,4,None,7], 28), False)
root255 = TreeNode(1)
# print(p.findTarget(root255, 2), False)

# Initial Setup:
# root points to node 5.
# k = 9.
# seen set is initially empty ({}).
# Iteration 1:
# Current node: 5
# Complement: We are looking for 9 - 5 = 4.
# Set: {}. The set is empty, so 4 is not in the set.
# Action: Add 5 to the set. The set becomes {5}.
# Next Step: Go to the left child of 5, which is 3.
# Iteration 2:
# Current node: 3
# Complement: We are looking for 9 - 3 = 6.
# Set: {5}. 6 is not in the set.
# Action: Add 3 to the set. The set becomes {3, 5}.
# Next Step: Go to the left child of 3, which is 2.
# Iteration 3:
# Current node: 2
# Complement: We are looking for 9 - 2 = 7.
# Set: {3, 5}. 7 is not in the set.
# Action: Add 2 to the set. The set becomes {2, 3, 5}.
# Next Step: Go to the left child of 2, which is None.
# Iteration 4 (Backtrack):
# Current node: None (left child of 2)
# Action: Backtrack to node 2.
# Next Step: Go to the right child of 2, which is None.
# Iteration 5 (Backtrack):
# Current node: None (right child of 2)
# Action: Backtrack to node 3.
# Next Step: Go to the right child of 3, which is 4.
# Iteration 6:
# Current node: 4
# Complement: We are looking for 9 - 4 = 5.
# Set: {2, 3, 5}. 5 is in the set!
# Action: Since we found 5 in the set, we know that the sum of 5 (from the set) and 4 (the current node) equals 9.
# Result: Return True immediately. We have found the pair 4 and 5.
