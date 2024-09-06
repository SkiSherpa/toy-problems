# You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

# 'A': Absent.
# 'L': Late.
# 'P': Present.
# The student is eligible for an attendance award if they meet both of the following criteria:

# The student was absent ('A') for strictly fewer than 2 days total.
# The student was never late ('L') for 3 or more consecutive days.
# Return true if the student is eligible for an attendance award, or false otherwise.

# Example 1:
# Input: s = "PPALLP"
# Output: true
# Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

# Example 2:
# Input: s = "PPALLL"
# Output: false
# Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.


# Constraints:

# 1 <= s.length <= 1000
# s[i] is either 'A', 'L', or 'P'.

# as soon as two As auto false
# as soon as 3 Ls auto false
class Sol:
    def checkRecord(self, s: str) -> bool:
        a_count = 0
        l_count = 0
        for char in s:
            if char != 'L':
                l_count = 0

            if char == 'A':
                a_count += 1

            if char == 'L':
                l_count += 1

            if a_count > 1:
                return False
            if l_count >= 3:
                return False

        return True


t = Sol()
print(t.checkRecord("PPALLP"), True)
print(t.checkRecord("PPALLL"), False)
# what about LLAL?- Easier code to not do, will do the easy one first, wait for test cases
# It passed

# t = O(n), where n is the length of S
# m = O(1)
# t = 39 ms 26.22% | m = 16.52 Mb 34.98%
# I something that maybe faster
class Solution:
    def checkRecord(self, s: str) -> bool:
        if 'LLL' in s:
            return False
        a_count = 0
        for char in s:
            if char == 'A':
                a_count += 1
            if a_count > 1:
                return False
        return True

# if 'LLL' is O(n)
# By separating the two checks into their own linear loops, you could exit a case early.
# Therefor clearing certain test early and not having to go as far down s
# t = O(n) and m = O(1)
# t = 25 ms 96.83% | m = 16.59Mb 34.98%
