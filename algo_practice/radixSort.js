// A utility function to get the digit at a specific place in a number
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  // A utility function to get the number of digits in a given number
  function digitCount(num) {
    if (num === 0) return 1;
    const count = Math.floor(Math.log10(Math.abs(num))) + 1;
    console.log("count ", count,"num", num);
    return count
  }

  // A utility function to find the number of digits in the largest number in an array
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
      console.log("maxDigits ", maxDigits);
    }

    return maxDigits;
  }

  // Radix Sort implementation
  function radixSort(arr) {
    const maxDigits = mostDigits(arr); // uses a loop

    for (let k = 0; k < maxDigits; k++) {
      // Create 10 buckets (0 to 9) for each digit place -
      // makes an empty array to place numbers that go in that digits' place
      // will always be 0-9, b/c our counting for this is base 10
      //  This is always a constant number, doesn't scale with arr.length
      const buckets = Array.from({ length: 10 }, () => []);
      console.log("1st loop: ", buckets);

      // Distribute elements into buckets based on the kth digit
      for (let i = 0; i < arr.length; i++) {
        const digit = getDigit(arr[i], k);
        console.log(digit, "current: ", arr[i]);
        buckets[digit].push(arr[i]);
      }
      console.log("2nd : ", buckets);
      // Concatenate buckets back into the main array
      arr = [].concat(...buckets);
    }

    return arr;
  }

  // Example usage:
  const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArray = radixSort(unsortedArray);
  console.log("Sorted Array:", sortedArray);
