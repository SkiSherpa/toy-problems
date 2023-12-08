function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const len = arr.length - 1;
    const pivot = arr[len];
    let left = [];
    let right = [];

    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // console.log(left, right);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  // Example usage:
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = quickSort(unsortedArray);
//   console.log(unsortedArray.length, sortedArray.length)
//   console.log(unsortedArray, sortedArray);
// const testArr = [3, 1, 4, 1, 2, 2];
// console.log(quickSort(testArr));

module.exports = quickSort;
