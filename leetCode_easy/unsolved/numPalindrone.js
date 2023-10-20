
12312312
i = 3
(12312312 / 10**(3-1)) % 10 // = the thing 3rd from the right

isPalindrome = num => {
    let numDigits = Math.log_base_10(num); // log_10(num) need to find out the real one
    retrieveNumberAtIndexFromRight = i =>  Math.floor(num / 10 ** (i - 1)) % 10;
    for (i = 0; i < Math.floor(numDigits / 2); i++) {
      if (retrieveNumberAtIndexFromRight(i) != retrieveNumberAtIndexFromRight(numDigits - i)) {
        return false;
      }
    }
    return true;
  }
