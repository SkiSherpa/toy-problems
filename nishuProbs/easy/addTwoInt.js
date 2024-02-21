/* add two ints */
var sum = function(n1, n2) {
    return n1+n2;
    };
// I changed input params to n1, n2 - instead of num1, num2
// t = 43ms 95.17%, m = 49.07MB, 5.18%

/* with no ; */
var sum = function(n1, n2) {
    return n1+n2
    };
// t = 58ms 31.70%%, m = 48.63MB, 19.84%

/* saving to var - the loop that one time was faster */
// with CONST
var sum = function(n1, n2) {
    const res = n1+n2;
    return res;
    };
// t = 70ms 9.52%, m = 49.00MB 8.83%

// with LET
var sum = function(n1, n2) {
    let res = n1+n2;
    return res;
    };
// t = 44ms 93.44%, m = 49.00MB 8.83%

/*
Just return WITH A ; is the fastest.

It's also interesting that CONST is slower than LET.
A num that shouldn't change seems like something CONST is designed for. LET I'd assume is supposed to be an all around tool, which usually less effiencent. Maybe the checks to keep CONST constant slows things down a bit, where LET may not have those restrictions.


adding stuff
*/
