# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.


# Constraints:

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.
# IP: a str
# OP: an int - longest palindrome that you can generate from the str
# create a dict to hold chars and their occurances

# create a numbers list
# largest odd num var = 0
# loop through dict
    # if value is even
        # add to numbers
    # IF value is odd and is larger than largest_odd
        # set largest_odd to that value
# loop through numbers
    # add each item to largest_odd
# return largest_odd

class Solution:
    def longestPalindrome(self, s: str) -> int:
        dict = {}
        for char in s:
            print(char)
            if char in dict:
                dict[char] += 1
            else:
                dict[char] = 1

        nums = []
        largest_odd = 0
        for letter in dict:
            if dict[letter] % 2 == 0:
                nums.append(dict[letter])
            elif dict[letter] > largest_odd:
                largest_odd = dict[letter]

        for num in nums:
            largest_odd += num

        return largest_odd

t = Solution()
# print(t.longestPalindrome("abccccdd"))
# failing test 40/70, the red line comes from that the string has too many char for a single line.
# gpt seems to think this is not the reason for why the test is failing.
# t49 = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth..

# create max_len var
class Sol:
    def longestPalindrome(self, s: str) -> int:
        dict = {}
        for char in s:
            print(char)
            if char in dict:
                dict[char] += 1
            else:
                dict[char] = 1
        # Initialize variables to track palindrome length
        max_length = 0
        has_odd = False

        # Loop through the counts
        for count in dict.values():
            if count % 2 == 0:
                max_length += count
            else:
                # If count is odd, add count - 1 to the length
                max_length += count - 1
                has_odd = True

        # If any character has an odd count, add 1 to the length for the middle character
        if has_odd:
            max_length += 1

        return max_length
e = Solution()
print(e.longestPalindrome("aaabccccddeeeee"), 11)

# t = O(n), where n is the number of chars in s. this comes from making the dict
# m = O(n), where n the chars in the dict , O(2n), cause the dict.values
# t = 50ms 5.27% | m = 16.76Mb 8.35%
