// A utility function to get the digit at a specific place in a number
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  // A utility function to get the number of digits in a given number
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  // A utility function to find the number of digits in the largest number in an array
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  }

  // Radix Sort implementation
  function radixSort(arr) {
    const maxDigits = mostDigits(arr);

    for (let k = 0; k < maxDigits; k++) {
      // Create 10 buckets (0 to 9) for each digit place
      const buckets = Array.from({ length: 10 }, () => []);

      // Distribute elements into buckets based on the kth digit
      for (let i = 0; i < arr.length; i++) {
        const digit = getDigit(arr[i], k);
        buckets[digit].push(arr[i]);
      }

      // Concatenate buckets back into the main array
      arr = [].concat(...buckets);
    }

    return arr;
  }

  // Example usage:
  const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArray = radixSort(unsortedArray);
  console.log("Sorted Array:", sortedArray);
