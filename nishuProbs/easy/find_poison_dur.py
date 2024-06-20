from typing import List
# Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

# You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

# Return the total number of seconds that Ashe is poisoned.


# Example 1:
# Input: timeSeries = [1,4], duration = 2
# Output: 4
# Explanation: Teemo's attacks on Ashe go as follows:
# - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
# - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
# Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

# Example 2:
# Input: timeSeries = [1,2], duration = 2
# Output: 3
# Explanation: Teemo's attacks on Ashe go as follows:
# - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
# - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
# Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.


# Constraints:

# 1 <= timeSeries.length <= 10^4
# 0 <= timeSeries[i], duration <= 10^7
# timeSeries is sorted in non-decreasing order.
# I hard coded in the first 2 examples, to get a third, I need another example
# IP: a list - when Ashe gets poisoned, an int - duration of poison
# OP: an int - the total count of sec ashe is poinsoned

class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if duration == 0:
            return 0
        # cal tot for the first val
        tot = 0 # tot counter to return
        if timeSeries[1] - timeSeries[0] < duration: # 6 - 5 < 2
            tot += timeSeries[1] - timeSeries[0]
        else:
            tot += duration
        i = 1 # index in timeSeries
        while i < len(timeSeries):
            # if the next num in timeSeries over laps with current num - durration
                # add the gap in second to tot
            if timeSeries[i] - timeSeries[i-1] < duration: # 6 - 5 < 2
                tot += timeSeries[i] - timeSeries[i-1]
            else:
                tot += duration
            i += 1
        return tot

t = Solution()
print(t.findPoisonedDuration([1,4], 2), 4)
print(t.findPoisonedDuration([1,2], 2), 3)
print(t.findPoisonedDuration([1,2,3,4,5,6,7,8,9], 1), 9) #3/40
print(t.findPoisonedDuration([1,3,5,7,9,11,13,15], 1), 8) #3/40
print(t.findPoisonedDuration([1,3,5,6,9], 2), 9) #3/40

class Sol:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if not timeSeries:
            return 0

        total_duration = 0

        for i in range(len(timeSeries) - 1):
            attack_time = timeSeries[i]
            next_attack_time = timeSeries[i + 1]
            # only when cur - next number is smaller than dur, you add it to tot.
            total_duration += min(next_attack_time - attack_time, duration)

        # Add duration for the last attack
        total_duration += duration

        return total_duration

# t = O(n), where n is the length of timeSeries
# m = O(1)
p = Sol()
print(p.findPoisonedDuration([1,4], 2), 4)
print(p.findPoisonedDuration([1,2], 2), 3)
print(p.findPoisonedDuration([1,2,3,4,5,6,7,8,9], 1), 9) #3/40
print(p.findPoisonedDuration([1,3,5,7,9,11,13,15], 1), 8) #3/40
print(p.findPoisonedDuration([1,3,5,6,9], 2), 9) #3/40
