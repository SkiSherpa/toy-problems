# Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.


# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: [3.00000,14.50000,11.00000]
# Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
# Hence return [3, 14.5, 11].

# Example 2:
# Input: root = [3,9,20,15,7]
# Output: [3.00000,14.50000,11.00000]


# Constraints:

# The number of nodes in the tree is in the range [1, 104].
# -231 <= Node.val <= 231 - 1
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional, List
class _Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        if root is None:
            return []

        avgs = [root.val]
        def bfs(node, avgs):
            if node.left is None and node.right is None:
                return

            left = bfs(node.left, avgs)
            right = bfs(node.right, avgs)
            average = left + right / 2
            avgs.append(average)
            return avgs

        return bfs(root, avgs)

class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        sum = {}
        num_of_nodes = {}

        def dfs(node, level):
            if not node:
                return
            # Initialize if the level hasn't been seen before
            if level not in sum:
                sum[level] = 0
                num_of_nodes[level] = 0
            # Add the current node's value and increment the count
            sum[level] += node.val
            num_of_nodes[level] += 1
            # print(sum)
            # print(num_of_nodes)
            dfs(node.left, level+1)
            dfs(node.right, level+1)
        dfs(root, 0)

        res = []
        for i in range(len(sum)):
            res.append(sum[i]/num_of_nodes[i])
        return res

# This is a famous kind of method of tree traversal
# where you have to keep travel of the level/height of where
# you are in the tree.
# With the 2 print statement for the first ex you get this:
# {0: 3}
# {0: 1}

# {0: 3, 1: 9}
# {0: 1, 1: 1}
# {0: 3, 1: 29}
# {0: 1, 1: 2}

# {0: 3, 1: 29, 2: 15}
# {0: 1, 1: 2, 2: 1}

# {0: 3, 1: 29, 2: 22}  sum
# {0: 1, 1: 2, 2: 2}    num_of_nodes
# ^^ this is everything added
# the keys are the thing that matches up the level of sum and num_of_nodes

# t = O(n), we hit every node
# m = O(h), where h is the hieght of the tree
# t = 46ms 48.47% | m = 18.64Mb 7.15%
