# A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

# Given an integer n, return true if n is a perfect number, otherwise return false.

# Example 1:
# Input: num = 28
# Output: true
# Explanation: 28 = 1 + 2 + 4 + 7 + 14
# 1, 2, 4, 7, and 14 are all divisors of 28.

# Example 2:
# Input: num = 7
# Output: false


# Constraints:

# 1 <= num <= 10^8

# dividing by half of num
# 28 / 2 = 14
# 28 - 2 - 14 = 12
# loop from 2 to 14
# look for divisors
# loop thro results and if sum of results == num
    # return True
class _Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        results = []
        upper = 0
        if num % 2 == 0:
            upper = num / 2
        else:
            upper = num // 3
        lower = 1
        sum = 0

        while lower <= upper:
            if num / upper == num / lower:
                results.append(upper)
            else:
                if num % upper == 0:
                    results.append(upper)
                if num % lower == 0:
                    results.append(lower)
            upper -= 1
            lower += 1
        print(results)

        for n in results:
            sum += n

        if sum == num:
            return True
        return False

class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False  # Numbers <= 1 cannot be perfect numbers

        # Initialize sum of divisors with 1 (because 1 is a divisor for all numbers)
        sum_divisors = 1

        # Calculate the largest possible divisor using a manual method for sqrt
        # upper_limit = 1
        # while upper_limit * upper_limit <= num:
        #     upper_limit += 1
        # upper_limit -= 1  # Adjust for overshoot
        upper_limit = int((num ** 0.5)//1)

        # Iterate from 2 to upper_limit (which is the approximate square root of num)
        for i in range(2, upper_limit + 1):
            if num % i == 0:
                sum_divisors += i
                print(i, num, num // i)
                if i != num // i:  # Add the complement divisor, ensuring it's different
                    sum_divisors += num // i

            # Early exit if the sum exceeds the number
            if sum_divisors > num:
                return False

        # Check if the sum of divisors equals the number
        return sum_divisors == num

# t = O(n), where n is the length from 2 - sqrt(num)
# m = O(1),
# t = 32ms 91% | m = 16.63Mb 7%

t = Solution()
# print(t.checkPerfectNumber(28), True)
# print(t.checkPerfectNumber(7), False)
# print(t.checkPerfectNumber(6), True)
print(t.checkPerfectNumber(99999993), False) # it times out with this one on leetcode
# it does take like 2 second here
# I added this change: upper = 0
        # if num % 2 == 0:
        #     upper = num / 2
        # else:
        #     upper = num // 3
# but then timed out on this test
print(t.checkPerfectNumber(99999992), True)
