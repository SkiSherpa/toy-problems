function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
        console.log("low, ", low, "high: ", high, "mid: ", mid, "val: ", arr[mid]);

        if (arr[mid] === target) {
        return mid; // Return the index if the target is found
      } else if (arr[mid] < target) {
        console.log(arr[mid], " < ", target);
        console.log("new low")
        low = mid + 1;
      } else {
        console.log(arr[mid], " > ", target);
        console.log("new high")
        high = mid - 1;
      }
    }

    return -1; // Return -1 if the target is not found
  }

  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetValue = 6;
  console.log(binarySearch(sortedArray, targetValue)); // 5
