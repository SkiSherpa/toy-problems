// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...


// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"


// Constraints:

// 1 <= columnNumber <= 231 - 1

// IP: a number
// OP: a string
// C: only positive IP nums
//      1 <= columnNumber <= 2^31 - 1

// gen an array of alphabet
// IF IP num < 27
// return index val + 1
// IF IP num < 702
// return double string

var convertToTitle = function(columnNumber) {
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphArr = [];
    for (let i = 0; i < alph.length; i++) {
        alphArr.push(alph[i]);
    }
    if (columnNumber < 27) {
        return alph[columnNumber - 1];
    }
    // loops of 26 starting at 27 - shift of 10s val
    // divide by 26, save result and remainder
    // round result down = 10s col
    // remainder = 1s col
    let tens = Math.floor(columnNumber / 26);
    let ones = columnNumber % 26;
    if (columnNumber < 702) {
        let result = alphArr[tens - 1] + alphArr[ones - 1];
        return result;
    }
    if (tens > 10) {
        // triple letter return
        let hundreds = Math.floor(columnNumber / 26);
        console.log(hundreds);
    }
};

// console.log(convertToTitle(1)); // A
// console.log(convertToTitle(28)); // AB
// console.log(convertToTitle(701)); // ZY

var _convertToTitle = function(columnNumber) {
    let result = ''
    while(columnNumber > 26) {
        console.log(result);
        let last = columnNumber % 26
        console.log('Before Turn last: ', last);
        last == 0 ? last = 26 : 0
        console.log('After Turn last: ', last);
        result += String.fromCharCode(64 + last)
        console.log('result: ', result, 'colNUm before reset, ', columnNumber);
        columnNumber = (columnNumber - last) / 26
        console.log("reseting COLNUM, ", columnNumber);
    }
    console.log(columnNumber)
    result += String.fromCharCode(64 + columnNumber)
    return result.split('').reverse().join('')
};


// console.log(_convertToTitle(705)); // AAC
console.log(100/26, 1%26, 26*26);

// var _convertToTitle = function(columnNumber) {
//     let result = ''
//     while(columnNumber > 26) {
//         let last = columnNumber % 26
//         last == 0 ? last = 26 : 0
//         result += String.fromCharCode(64 + last)
//         columnNumber = (columnNumber - last) / 26
//     }
//     result += String.fromCharCode(64 + columnNumber)
//     return result.split('').reverse().join('')
// };

// console.log(_convertToTitle(705));
