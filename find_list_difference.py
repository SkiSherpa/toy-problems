# Given two lists, nums1 and nums2, return a list that contains all of the numbers that are in nums1 that are not in nums2. The output should be sorted from smallest to largest.
def find_list_difference(nums1, nums2):
    results = []
    str_nums2 = ""
    for num2 in nums2:
        str_nums2 += str(num2)
    print(type(str_nums2), str_nums2)
    for num1 in nums1:
        if str(num1) not in str_nums2:
            results.append(num1)
    results.sort()
    print("RESULTS: ", results)

    return results

print(find_list_difference([5, 2, 4, 3, 1], [4, 2]))
# [1, 3, 5]

print(find_list_difference([1, 5, 4, 2, 3], [6]))
# [1, 2, 3, 4, 5]

print(find_list_difference([4, 2, 5, 3, 1], [2, 1, 3, 4, 5]))
# []

print(find_list_difference([1, 4, 2, 5, 3], []))
# [1, 2, 3, 4, 5]

print(find_list_difference([], [1, 2 ,3 ,4, 5]))
# []
