/*
Given arr, k, and x. where arr is sorted ints.

give the  k  ints in the array that are closest to x

if k = 3, find the three closest numbers to x

[1,2,3,4,5,6], k = 3, x = 4
-> 4, 3, 5

[1,2,3,4,5,6], k = 2, x = 4
-> 4,3 || 4, 5

if r is the thing you return, minimize:

sum(|r[i] - x| for r[i] in r)
[1,4,6,17,20], k = 3, x = 9
-> 6, 4, 1, | 6,4,17

[1,4,6,17,20], k = 3, x = 5
-> 6, 4, 1,

// IP: an arr of ints, two numbers, k and x
// where k = the number of elements to return, x = target number
// OP: an array of numbers - that are cloesest to x

x - arr[i] = difference
// 1. find the target num (closest to target number)
// 2. expand from num found in 1.

// define "results" = []
// define "expandFrom" =
// define i = 0;
// 1.iterate through arr, until arr[i] >= x
     // IF current num is larger than x
            // IF prev's difference is smaller than current difference from x
                // add prev's value to results
                // expandFrom = prev valu;
                // i = i - 1;
                // break
            // otherwise, current is closer
                // expandFrom = arr[i];
                // add current to results
                // break
// two pointers - j(--) = i - 1 and k(++) = i+1
// 2. While (results.length < k)
    // IF y is out of bounds
        // loop and populate all numbers to left of arr[i]
    // otherwise,
    // compute difference between j and k from "expandFrom"
    // IF arr[j] is closer than arr[k]
        // add arr[j] to results
        // j--
    // otherwise
        // add arr[k] to results;
        // k++
// return results
*/

let findKClosestEle = function (arr, k, x) {
    let results = [];
    // let expandFrom = x - arr[0]; // might be redundent since we have i
    let i = 0;
    for (i; i <= arr.length; i++) {
        if (arr[i] >= x) {
            if (Math.abs(x - arr[i-1]) < Math.abs(x - arr[i])) {
                results.push(arr[i-1]);
                i = i - 1;
                break;
            } else {
                results.push(arr[i]);
                break;
            }
        }
    }
    let j = i - 1;
    let y = i + 1;
    while (results.length < k) {
        if (arr[y] === undefined) {
            results.push(arr[j]);
            j--;

        } else if (arr[j] === undefined) {
            results.push(arr[y]);
            y++;

        } else {
            let jDiff = Math.abs(arr[i] - arr[j]);
            let kDiff = Math.abs(arr[i] - arr[y]);
            if (jDiff <= kDiff) {
                results.push(arr[j]);
                j--;
            } else {
                results.push(arr[y]);
                y++;
            }
        }
    }

    return results;
}
// console.log(findKClosestEle([1,4,6,17,20], 3, 5)); // [1,4,6]
// console.log(findKClosestEle([1,4,6,17,20], 3, 20)); // [6,17,20]
// console.log(findKClosestEle([1,4,6,17,20], 3, 18)); // [6,17,20]
console.log(findKClosestEle([1,4,6,17,20], 3, 2)); // [1,4,6]

// use binary search to find target number - split arr in half each time, split in the middle
// when arr is small - O(k+n), where n is the height of binary tree ~ log(n)
// bi search = O(log(n))
