# -*- coding: utf-8 -*-

# write a fn takes in an int, and gives me its prime encoding
# prime encoding: a list of numbers where where the nums[i] is = to the ith prime  each position of the 1s and 0s
# every num can be decomposed into mult by primes

# ex: 8
# prime decomposition = 2*2*2 -> [2] or [2,2,2]
# prime encoding = [3]

# ex2: 10
# prime decomp = 2*5 -> [2,5]
# prime encoding = [1,0,1] corrosponds to [2,3,5]
# 2 shows up once
# 3 not present
# 5 shows up once
# the prime encoding is related to a prime list starting at 2
# prime list = [2,3,5,7,11, ...]

# given a num's prime decomp, find the prime encoding
# STRETCH: find the prime decomp from the number

# sort nums
# loop throu nnums
    # keep a count of the current number
    # when number changes add the count to res list

class Solution:
    def primes(self, nums):
        primes = [2,3,5,7,11,13]
        nums.sort()
        res = []
        cur_prime_pos = 0
        prime_occur = 1
        num_index = 0
        while num_index < len(nums):
            # IF the cur in primes is less than nums current
                # move cur_prime_pos up by one
            if primes[cur_prime_pos] < nums[num_index]:
                cur_prime_pos += 1
                res.append(0)
            else:
                try:
                    if nums[num_index] != nums[num_index + 1]:
                        res.append(prime_occur)
                        prime_occur = 1
                        cur_prime_pos += 1
                    else:
                        prime_occur += 1
                except IndexError:
                    res.append(prime_occur)
                num_index += 1
        return res



t = Solution()
# print(t.primes([2,2,2]), [3])
# print(t.primes([2,5]), [1,0,1])
# print(t.primes([5,5,5]), [0,0,3])
# print(t.primes([2,3,7,11,11,2]), [2,1,0,1,2])

# more semantic naming for var used
# i = nums_index
# cur_prime_pos = cur_prime_position
# count = cur_prime_occur
