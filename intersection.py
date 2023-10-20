# Given a 2D integer list nums (a list of lists) where each list in nums is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

# Here are some examples:

# Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
# Output: [3,4]
# Explanation: The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

# Input: nums = [[1,2,3],[4,5,6]]
# Output: []
# Explanation: There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

# Look at the built-in data type set and its methods to see if something can help you there.
# https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset
# search for set

# IF 1st condintion met return a sorted list
# C: Each list may be different lengths
def intersection(nums):
    results = []
    i = 0
    longest = nums[0]
    # IF the current length of arr is > longest
        # replace longest
    while i < len(nums):
        if len(nums[i]) > len(longest):
            longest = nums[i]
        i += 1
    # loop thro all lists after index of zero



nums = [[1,2,3],[4,5,6]]
print(intersection(nums))
# [3,4]

nums2 = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
print(intersection(nums2))
# []


# Learn's sol:
def _intersection(nums):
    result = set(nums[0])
    for l in nums[1:]:
        result = result.intersection(set(l))
    return list(sorted(result))
