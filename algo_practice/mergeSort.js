// usually recursive
// divide and concure
// you keep spliting the array in half, till single digits
// merge numbers into sorted smaller arrays unitl at the og length

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    console.log("before recusive call, ", arr);
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    console.log(arr, left, right);
    return merge(left, right); // [1,3,5] , [2, 4, 6]
  }

  function merge(left, right) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
    console.log('helper, merged: ', merged, "left:", left, i);
    // using the spread syntax (...) to push all elements
    // from the left array starting from index i to the
    // merged array
    merged.push(...left.slice(i)); //
    // ... takes [3] and the push [5] -> [3, 5] instead of [3. [5]]
    console.log('helpeRRRR, merged: ', merged, "right:", right, j);
    merged.push(...right.slice(j));
    console.log('helper, pushed: ', merged);
    return merged;
  }

console.log(mergeSort([5, 3, 1, 2, 6, 4]));

//t = O(nlog(n)), n is the length of the array
//mem = O(n), n is the length of the array
