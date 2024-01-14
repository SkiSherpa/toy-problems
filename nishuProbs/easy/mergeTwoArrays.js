// given two sorted arrays give me one sorted array
// IP: 2 sorted arrays
// OP: a new array - a combo to the two arrays also sorted.

// create two pointers, i = 0 and j = 0
// create an empty array, comboArr = []
// loop through both arrays
    // IF cur1 < cur2
        // add cur1 combo
        // i++
    // IF cur1 > cur2
        // add cur2 to combo
        // j++
    // IF cur1 === cur2
        // add cur1 and cur2 to combo
        // i++
        // j++
    // IF i > length of arr1
        // add the rest of arr2 to combo
        // return combo
    // IF j > length of arr2
        // add the rest of arr1 to combo
        // return combo
    // return combo

// t = O(n+m), where n and m are the number of items in arr1 and arr2, respectively
// m = O(n+m), where n and m are the number of items in arr1 and arr2, respectively

let mergeTwoArrays = function (arr1, arr2) {
    // edge cases return an og array, when you should return something new
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    let i = 0;
    let j = 0;
    let combo = [];
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;

    while (i < arr1Len || j < arr2Len) {
        let cur1 = arr1[i];
        let cur2 = arr2[j];
        if (cur1 < cur2) {
            combo.push(cur1);
            i++;
        } else {
            combo.push(cur2)
            j++;
        }
        // } else {
        //     combo.push(cur1, cur2);
        //     i++;
        //     j++
        // }

        if (i >= arr1Len) {
            let restOf2 = arr2.slice(j);
            combo.push(...restOf2);
            return combo;
        }
        if (j >= arr2Len) {
            let restOf1 = arr1.slice(i);
            combo.push(...restOf1);
            return combo;
        }
    }
    return combo;
}


// console.log([1,2,2,3,3,4], mergeTwoArrays([1,2,3], [2,3,4]));
// console.log([1,2,3,4,5], mergeTwoArrays([1,2], [3,4,5]));
console.log([3,4,5], mergeTwoArrays([], [3,4,5]));
console.log([3,4,5], mergeTwoArrays([3,4,5], []));
// module.exports = mergeTwoArrays;
