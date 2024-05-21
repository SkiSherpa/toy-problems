# IP: two lists of ints
# OP: a list of uniq ints - same ints in both lists

# create same list
# loop through the first list
    # IF the current number is in the other list AND not in same list
        # add current number to same list

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        same = []
        for i in range(0, len(nums1)):
            cur1 = nums1[i]
            if cur1 in nums2 and cur1 not in same:
                same.append(cur1)
        return same

# t = O(n^2), I assume the cur1 in nums2 is iterating through nums2, so this is a nested for loop
# m = O(n), where n is the number elements in same, at worst case could be every number in list 1 or 2
# t = 64ms 7.42% | m = 15.62Mb 100%

# maybe for somthing faster you could save it in a obj instead of an array
# then return object.values

class Solution1:
    def intersection1(self, nums1: List[int], nums2: List[int]) -> List[int]:
        same = {}
        for i in range(0, len(nums1)):
            cur1 = nums1[i]
            if cur1 in nums2 and cur1 not in same:
                same[cur1] = cur1
        return same

# it is faster. I forgot to do the object.values, but it still worked
# t = 61.49% | m = 44.42%
