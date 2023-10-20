# This is 1 type of test
from roman_numerals import from_roman_to_arabic
# This is for a 2nd type of test
from unittest import TestCase

# ! You don't mix these types of test, but this is practice


# This is 1 type of test
# def test_25():
#     # Arrage
#     input = "XXV"

#     # Act
#     result = from_roman_to_arabic(input)

#     # Assert
#     assert result == 25


# 2nd kind of test
class TestRomanNumerala(TestCase):
    def test_111(self):
        # arrage
        input = "CXI"

        # Act
        result = from_roman_to_arabic(input)

        # Assert
        self.assertEqual(result, 111)

# ! run the tests by typing `pytest` into term in correct dirrectory
# OP with the 2 tests looks like:
# ============================= test session starts ==============================
# platform darwin -- Python 3.10.2, pytest-7.4.0, pluggy-1.2.0
# rootdir: /Users/erickwatanabe/Documents/CodeLearning/sjp/python_quize_q_to_practice
# collected 2 items

# test_roman_numerals.py ..                                                [100%]

# ============================== 2 passed in 0.03s ===============================

# ! To see what a failing test looks like.
# There is a bug in the from_roman_to_arabic fn
# LII should be 52

class TestRomanNumerala(TestCase):
    def test_purpose_fail(self):
        # arrage
        input = "LII"

        # Act
        result = from_roman_to_arabic(input)

        # Assert
        self.assertEqual(result, 52)

# ============================= test session starts ==============================
# platform darwin -- Python 3.10.2, pytest-7.4.0, pluggy-1.2.0
# rootdir: /Users/erickwatanabe/Documents/CodeLearning/sjp/python_quize_q_to_practice
# collected 2 items

# test_roman_numerals.py .F                                                [100%]

# =================================== FAILURES ===================================
# _____________________ TestRomanNumerala.test_purpose_fail ______________________

# self = <test_roman_numerals.TestRomanNumerala testMethod=test_purpose_fail>

#     def test_purpose_fail(self):
#         # arrage
#         input = "LII"

#         # Act
# >       result = from_roman_to_arabic(input)

# test_roman_numerals.py:54:
# _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

# n = 'LII'

#     def from_roman_to_arabic(n):
#         numerals = {"I":1,"V":5,"X":10,"C":100,"D":500,"M":1000}
#         adjust_values = {"IV":2,"IX":2,"XL":20,"XC":20,"CD":200,"CM":200}
#         sum = 0
#         for i in n:
# >           sum += numerals[i]
# E           KeyError: 'L'

# roman_numerals.py:7: KeyError
# =========================== short test summary info ============================
# FAILED test_roman_numerals.py::TestRomanNumerala::test_purpose_fail - KeyError: 'L'
# ========================= 1 failed, 1 passed in 0.06s ==========================
