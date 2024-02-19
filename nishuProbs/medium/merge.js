/**
 * https://leetcode.com/problems/merge-intervals/
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Constraints:

1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4

 * @param {number[][]} intervals
 * @return {number[][]}
 */
// IP: an array of arrays - each item is an array of two nums
// OP: an array of arrays - with over lapping items merged together
// E: if there's one item return intervals
//  [1,-1], [1,2] -> cant have this

// ? you can have something like [1,1], [1,1] - could happen
// loop with current item in place, while moving pointer to next item until merge
// current[1] >= next[0]
    // IF current[1] >= next[1]
        // go to next.next item
    // otherwise, merge current and next items
        // make new array
                // add first number from current and last number from next
                // delete items from current to next and add new array
    // -- when you merge, start the next current at the last interval merged
var merge = function(intervals) {
    if (intervals.length === 1) {
        return intervals;
    }
    let current = 0;
    let next = 1;
    // if a[0] eqauls b[0] do (a[0]+a[1]) - (b[0]+b[1])
    // otherwise just a[0] - b[0]
    intervals.sort((a,b) => {
        if (a[0] === b[0]) {
            return (a[0]+a[1]) - (b[0]+b[1]);
        } else {
            return a[0] - b[0];
        }
    });
    console.log("sort", intervals);
    while ( next < intervals.length) {
        if (intervals[current][0] > intervals[next][0]) {
            let newCur = intervals[next];
            let newNext = intervals[current];
            intervals[current] = newCur;
            intervals[next] = newNext;
        }

        if (intervals[current][0] < intervals[next][0] && intervals[current][1] > intervals[next][1]) {
            intervals.splice(next, 1);
            continue;
        }
        if (intervals[current][1] >= intervals[next][0]) {
            console.log('hit');
            if (intervals[current][1] > intervals[next][1]) {
                next++;
            } else {
                let arrToAdd = [intervals[current][0], intervals[next][1]];
                let numToDelete = next - current + 1;
                intervals.splice(current, numToDelete, arrToAdd);
                next = current + 1;
            }
        } else {
            // IF the next item is with in range of current
                // delete next item
            current++;
            next++;
        }
    }
    return intervals;
};
// t = O(nlog(n)) - where n is the number of intervals.
    // the length comes from the sort at the beginning, but with out the sort I don't think you can solve this problem
// m = O(log(n)) - again from the sort.
// t = 114ms 21.22% | m = 59.42MB 25.40%

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]), " -- ", [[1,6],[8,10],[15,18]]);
// console.log(merge([[1,4],[4,5]]), " -- ", [[1,5]]);
// console.log(merge([[1,4],[2,4],[4,10],[15,18]]), " -- ", [[1,10], [15,18]]);
// console.log(merge([[1,4],[1,4]]), " -- ", [[1,4]]);
// console.log(merge([[1,4],[0,4]]), " -- ", [[0,4]]);
// console.log(merge([[1,4],[2,3]]), " -- ", [[1,4]]);
// console.log(merge([[1,8],[2,3],[3,4]]), " -- ", [[1,8]]);
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]), " -- ", [[1,10]]);
// With this one I feel like my logic isn't set up for this problem correctly
// THis is only 45/170 tests...
// sorting by front number solves alot, but this one is an issue:
// [[1,3],[0,2],[2,3],[4,6],[4,5],[5,5],[0,2],[3,3]]
// getting [[0,3],[4,6],[4,5]]
console.log(merge([[1,3],[0,2],[2,3],[4,6],[4,5],[5,5],[0,2],[3,3]]), " -- ", [[0,3],[4,6]]); // 148/170 -> sort
// I changed the sort to check if the first numbers are equal, then do first + sencod comparison, otherwise just compare the first numbers
