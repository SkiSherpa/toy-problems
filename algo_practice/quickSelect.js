// using quickSort to confirm quickSelect is working proply
const quickSort = require('./quickSort.js');

// similar to quickSort. Uses a partition, but doesn't sort the whole array

// let say you want the 2nd smallest element, k = 2nd smallest
// [1, 3, 2, 4, 8, 5]

function quickSelect(arr, k, left = 0, right = arr.length - 1) {
    if (left === right) {
      return arr[left];
    }

    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, left, right);

    // If the pivot is at the k-th position, we found our element
    if (k === pivotIndex) {
      return arr[pivotIndex];
    } else if (k < pivotIndex) {
      // If k is less than pivot index, search in the left subarray
      return quickSelect(arr, k, left, pivotIndex - 1);
    } else {
      // If k is greater than pivot index, search in the right subarray
      return quickSelect(arr, k, pivotIndex + 1, right);
    }
  }

  function partition(arr, left, right) {
    // Choose the rightmost element as the pivot
    const pivot = arr[right];

    // Initialize the partition index
    let i = left - 1;

    // Iterate through the array and move elements smaller than the pivot to the left
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }

    // Move the pivot to its final position
    swap(arr, i + 1, right);

    // Return the final position of the pivot
    return i + 1;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Example usage:
  const array = [3, 1, 4, 4, 2, 2, 5, 3];
  const k = 3; // Find the 3rd smallest element
  const result = quickSelect(array, k - 1); // Subtract 1 because the algorithm is 0-based
  const sortedArr = quickSort(array);
  console.log(sortedArr);
  console.log(`The ${k}-th smallest element is: ${result}`);


// t = O(n^2) worst case, best O(n) you'll have to go through the array at least once
// worst case, if you start at the end looking for the smallest, but the array is already sorted
