// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
// IP: array of ints
// OP: a number - max profit
// C: IF you can't make a profit return zero
// C: IP numbers >= 0

// Find smallest number in prices
// found the largest number that comes after the smallest found number
// largest - smallest = max profit

// last - first
// [7,1,5,3,6,4]
// reverse the list
// [4,6,3,5,1,7]
// find the largest difference
// IF largest < 0
    // return zero
// return the largest difference

// 7,6,4,3,1 -> [1,2,3,4,6,7]
var maxProfit = function(prices) {
    prices.reverse();
    let largest = -1;
    console.log(prices);
    let arrLength = prices.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            console.log("i", prices[i], "j", prices[j], "diff: ", prices[i] - prices[j])
            if (prices[i] - prices[j] > largest) {
                largest = prices[i] - prices[j];
            }
        }
    }
    if (largest < 0) {
        return 0;
    }
    return largest;
};

// console.log(maxProfit([7,1,5,3,6,4])) // 5
// console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([1,4,2])); // 3

// This works unless the IP array is crazy large, excede time limit to execute. -> The two pointer method is faster that a nested for loop

var _maxProfit = function(prices) {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit

        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
};
