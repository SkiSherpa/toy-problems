// https://leetcode.com/problems/baseball-game/description/
// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.
// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:
// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.
// E: IF there are less than 2 numbers in results, and the operation + happens?
function calPoints(operations) {
    var finalScore = 0;
    var scores = [];
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var item = operations_1[_i];
        if (item === "C") {
            scores.pop();
        }
        else if (item === "D") {
            var lastScore = scores[scores.length - 1] || 0;
            scores.push(lastScore * 2);
        }
        else if (item === "+") {
            var last = scores[scores.length - 1] || 0;
            var secondLast = scores[scores.length - 2] || 0;
            scores.push(last + secondLast);
        }
        else {
            scores.push(Number(item));
        }
    }
    finalScore = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return finalScore;
}
console.log(calPoints(["5", "2", "C", "D", "+"]), 30);
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27);
console.log(calPoints(["1", "C"]), 0);
