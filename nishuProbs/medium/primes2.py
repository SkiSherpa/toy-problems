
# write  a function that takes a number and finds the prime encoding.
# Prime decomposition: the lowest prime factors of a number
# prime list = [2,3,5,7,11, ...]
# ex1: 8
# prime decomposition = 2*2*2 -> [2] or [2,2,2]
# prime encoding = [3]

# ex2: 10
# prime decomp = 2*5 -> [2,5]
# prime encoding = [1,0,1] corrosponds to [2,3,5]
# 2 shows up once
# 3 not present
# 5 shows up once
# the prime encoding is related to a prime list starting at 2

# ex3: 20
# prime decomp = [2,2,5]
# prime_encoding = [2, 0, 1]
# 2 shows up twice
# 3 shows up zero times
# 5 shows up once

# find the prime decomposition
# if I could I would import the fn from prime.py,
#   as it takes the prime decomp as an input

# to find the nest prime, two helper functions are needed
from primes import Solution
class Sol:
    # determines if a number is prime
    def is_prime(self, num):
        if num <= 1:
            return False  # Numbers less than 2 are not prime
        if num <= 3:
            return True  # 2 and 3 are prime numbers
        if num % 2 == 0 or num % 3 == 0:
            return False  # Exclude multiples of 2 and 3
        i = 5
        while i * i <= num:
            if num % i == 0 or num % (i + 2) == 0:
                return False  # Check divisibility by 5, 7, 11, 13, etc.
            i += 6  # Increment by 6 to skip even numbers and multiples of 3
        return True  # If no divisors found, number is prime

    # finds the next prime number
    def next_prime(self, num):
        n = num + 1
        while not self.is_prime(n):
            n += 1
        return n

    def find_primes(self, n):
        cur_prime = 2
        prime_decompositions = []
        # run this loop until n == 1
        # if ans is a whole num when dividing n by the cur_prime
            # place cur_prime in prime_decomposition list
            # divide n by current prime
        # set cur_prime to next prime
        while n > 1:
            if n % cur_prime == 0:
                prime_decompositions.append(cur_prime)
                n /= cur_prime
            else:
                cur_prime = self.next_prime(cur_prime)

        print(cur_prime, prime_decompositions)
        return prime_decompositions

    def find_prime_encoding(self, n):
        prime_decompositions = self.find_primes(n)
        get_prime_encoding = Solution()
        prime_encodings = get_prime_encoding.primes(prime_decompositions)
        return prime_encodings


t = Sol()
# 20 -> [2,2,5] -> [2,0,1]
print(t.find_prime_encoding(20), [2,0,1])
