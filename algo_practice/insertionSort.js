/*
Insertion sort
Go from left > right.
Loop through items
	Compare the current to the item on its left
		Insert at the correct position
Ex: [1,4,3,2], the bold number will be the current number & sort in ascending order
[1, 4, 3, 2]   remains in place b/c its the initial item
[1, 4, 3, 2]   compare 4 to 1, 4 is greater than 1, leave it where it is
[1, 4, 3,  2]  is 3 > 4? No, switch the two
[1, 3, 4, 2]   is 3 > 1? Yes, leave it
[1, 3, 4, 2]   is 2 > 4? No, swap 2 and 4
[1, 3, 2, 4]   is 2 > 3? No, swap 2 and 3
[1, 2, 3, 4]   is 2 > 1? Yes, leave it
We’ve gone through the whole array and its sorted.
*/

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let currentElement = array[i];
      let lastIndex = i - 1;

      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        console.log(i, 'before swap: ', array, "array[lastIndex] > currentElement", array[lastIndex], ">", currentElement);
        array[lastIndex + 1] = array[lastIndex];
        console.log(i, '___AFter: ', array); // [1, 4, 4, 3]
        lastIndex--;
      }
      console.log(i, "going to set new position, ", array);
      array[lastIndex + 1] = currentElement;
      console.log(i, "is set ", array);
    }

    return array;
  };

console.log(insertionSort([1,4,3,2]));




// ================ OLD NOTES and ATTEMPTS ==================
// loop through arr, start at i = 1 - the initial item alway stays put
    // save old i postion
    // IF current value > (current - 1 ) value
        // swap positions -
        // subtract 1 from i
        // compare again
    // otherwise, leave it and move to next value
    // check again

let compareToLeft = function (arr, i) {
    // IF i > length of arr
        // return arr
    // IF arr[i - 1] > arr[i], they need to swicth
        // prev = arr[i - 1]
        // cur = arr[i]
        // arr[i - 1] = cur
        // arr[i] = prev
    // return arr
}

let _insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        let prevIndex = i-1;

        // prevIndex >= 0 - as long as the we are not at the begining of the array >> error handling for if at the front comparing undefined
        //  && item at prev i is greate than cur item
        while (prevIndex >= 0 && arr[prevIndex] > cur) {
            console.log('before swap: ', arr);
            arr[prevIndex + 1] = arr[prevIndex];
            console.log('___AFter: ', arr);
            prevIndex--;
        }
        console.log("going to set new position, ", arr);
        arr[prevIndex + 1] = cur;
        console.log("is set ", arr);
    }
    return arr;
}
