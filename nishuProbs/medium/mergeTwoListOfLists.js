// merging one list of lists
// implement it with using mergeTwoArrays.js from easy dir

let mergeTwoArrays = function (arr1, arr2) {
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

// index for list, i = 0
// IF i = 0 and 1
    // combo = call mergeTwoArrays(list[0], list[1]);
// go through rest of list - recusive
    // mergeTwoArrays(combo, next array in list);

let mergeMultiList = function (list) {
    let i = 0;
    let arr = [];
    while (i < list.length) {
        arr = mergeTwoArrays(arr, list[i]);
        i++;
    }
    return arr;
}

let n = [[1,2,3], [4,5,6], [7,8,9]];
let m = [[1,2,3], [1,2,3], [1,2,3]];
let p = [[1,2,3], [4,5,6], []];

console.log([1,2,3,4,5,6,7,8,9], mergeMultiList(n));
console.log([1,1,1,2,2,2,3,3,3], mergeMultiList(m));
console.log([1,2,3,4,5,6], mergeMultiList(p));
console.log([], mergeMultiList([]));
console.log([1,2,3], mergeMultiList([[1,2,3], []]));
console.log([1,2,3], mergeMultiList([[1,2,3]]));
