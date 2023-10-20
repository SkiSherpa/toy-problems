# This problem is adapted from the 2021 Advent Of Code competition.

# Oh, no! While on a cruise ship, you dropped your keys in the ocean! Luckily, the captain of the ship has a submarine handy for these types of situations. The crew get you into the submarine and lower it gently into the waves.

# As the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your function input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.

# For example, suppose you had the following report:

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

# The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

# To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

# 199 (N/A - no previous measurement)
# 200 (increased) ★
# 208 (increased) ★
# 210 (increased) ★
# 200 (decreased)
# 207 (increased) ★
# 240 (increased) ★
# 269 (increased) ★
# 260 (decreased)
# 263 (increased) ★
# 1
# Find The Number Of Depth Increases
# 1 PT

# The following function accepts a list of integers, depths. Complete the function to return the number of times the depth increases

def count_depth_increases(depths):
    # increase_count var
    # loop through depths arr, start at i = 1
    # IF current > prev
    # increase_count++
    increase_count = 0
    for i in range(1, len(depths)):
        if depths[i] > depths[i - 1]:
            increase_count += 1
    return increase_count

# SOL:
# To understand this code, first have a look at the following functions in the Python standard distribution:

# tee: https://docs.python.org/3/library/itertools.html#itertools.tee
# zip: https://docs.python.org/3/library/functions.html#zip
from itertools import tee


def pairwise(iterable):
    """
    Create a new iterable of next-value pairs.
    """
    a, b = tee(iterable)
    next(b, None)
    return zip(a, b)


def sliding_window_sums(depths):
    """
    Create a list of three-measurement sums
    """
    return [
        a + b + c
        for a, b, c
        in zip(depths, depths[1:], depths[2:])
    ]


# def count_depth_increases(depths):
#     # Get the sliding window sums
#     sums = sliding_window_sums(depths)
#     count = 0

#     # Create a list that has a 1 if the
#     # first value in the pair is less than
#     # the second value in a pair and a 0
#     # if not, then sum the 1s and 0s
#     return sum([1 if a < b else 0 for a, b in pairwise(sums)])
