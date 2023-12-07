// max heap
function heapSort(arr) {
    // Build max heap
    buildMaxHeap(arr);

    // Extract elements one by one from the heap
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum element) with the last element
        swap(arr, 0, i);

        // Call max heapify on the reduced heap
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    console.log("build 1:", arr);
    // Build max heap from the bottom up
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
    console.log("build 2: ", arr);
}

function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    // Compare with left child
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    // Compare with right child
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest is not the root, swap and continue heapifying
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, heapSize);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage:
const arrayToSort = [12, 4, 5, 6, 7, 3, 1, 15];
const sortedArray = heapSort(arrayToSort.slice());
// console.log("Original Array:", arrayToSort);
console.log("Sorted Array:", sortedArray);
// const test = buildMaxHeap(sortedArray);
// console.log("test ", test);
