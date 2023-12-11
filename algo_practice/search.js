function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
  }
  const array = [2, 4, 6, 8, 10];
  const targetValue = 6;

//   t = O(n), n is the length of the array,
//  Mem = O(1), you just need to hold the current index in the loop
