# This is a continuation of yesterday's story.

# You're reviewing the sonar depth data and find out that it isn't as useful as you expected. There's just too much noise in the data.

# Instead, you decide to consider sums of a "three-measurement sliding window". What that means is you will add an entry and the next two entries together, then use that three-number sum to find out how quickly the depth increases.

# Consider, again, these readings.

# 199
# 200
# 208
# 210
# 200
# 207
# 240
# 269
# 260
# 263
# This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

# A "sliding window" looks a a certain number of values for each calculation. Because we want a three-measurement sliding window, we would consider the sum of the first three numbers, then the sum of the next three numbers, then the sum of the next three numbers, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

# Using the example data above, we would get these three-measurement sums to use.

# 199 + 200 + 208  =  607 (N/A - no previous measurement)
# 200 + 208 + 210  =  618 (increased) ★
# 208 + 210 + 200  =  618 (no change)
# 210 + 200 + 207  =  617 (decreased)
# 200 + 207 + 240  =  647 (increased) ★
# 207 + 240 + 269  =  716 (increased) ★
# 240 + 269 + 260  =  769 (increased) ★
# 269 + 260 + 263  =  792 (increased) ★
# In that example, there are 5 sums that are larger than the previous sum, so your function would return 5.

# 1
# Three-Sum Sliding Window
# 1 PT

# The following function accepts a list of integers, depths. Complete the function to return the number of times the depth increases for sum in a three-measurement sliding window.
