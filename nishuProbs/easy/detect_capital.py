# We define the usage of capitals in a word to be right when one of the following cases holds:

# All letters in this word are capitals, like "USA".
# All letters in this word are not capitals, like "leetcode".
# Only the first letter in this word is capital, like "Google".
# Given a string word, return true if the usage of capitals in it is right.



# Example 1:

# Input: word = "USA"
# Output: true
# Example 2:

# Input: word = "FlaG"
# Output: false


# Constraints:

# 1 <= word.length <= 100
# word consists of lowercase and uppercase English letters.
class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        lower_case = "abcdefghijklmnopqrstuvwxyz"

        prev_letter_upper = False
        many_let_is_upper = False
        def lower_case_detect(rest_of_word: str) -> bool:
            print(prev_letter_upper, many_let_is_upper)
            for letter in rest_of_word:
                if prev_letter_upper and many_let_is_upper:
                    return False
                elif letter in lower_case:
                    continue
                else:
                    return False
            return True

        for i, letter in enumerate(word):
            # lower_case
            if letter in lower_case:
                return lower_case_detect(word[i:])

            # upper case
            if letter in upper_case and i == 0:
                prev_letter_upper = True
            elif prev_letter_upper and letter in upper_case:
                if i >= 1:
                    many_let_is_upper = True
                continue
            elif i > 1 and letter in lower_case:
                return False
            else:
                return False
        return True

# t = O(n), where n is the length of the word
# m = O(1)
# t = 31 ms 81.86% | 16.48 Mb  74.12%

t = Solution()
# print(t.detectCapitalUse("USA"), True)
# print(t.detectCapitalUse("FlaG"), False)
# print(t.detectCapitalUse("asdfjkh"), True)
# print(t.detectCapitalUse("Asdfjkh"), True)
print(t.detectCapitalUse("AAa"), False)
