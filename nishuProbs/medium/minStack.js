/*
https://leetcode.com/problems/min-stack/description/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.



Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

-2^31 <= val <= (2^31) - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
*/

// return an empty array
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
//  push goes to the end of the array
// create a new slot at the end
// add the value to new slot
MinStack.prototype.push = function(val) {
    this.stack[this.stack.length] = val;
    let lastMinItem = this.min[this.min.length - 1];
    // IF the min is populated, compare the last item in min to val
        // that's the point of val, val
        // your comparing: this.min.length > 0 ? lastMinItem : val VS. val
    let minVal = Math.min(this.min.length > 0 ? lastMinItem : val, val)
    this.min[this.min.length] = minVal;
};

/**
 * @return {void}
 */
//  removes the back element of the array, and returns that element
MinStack.prototype.pop = function() {
    // removing the last item in stack and min
    delete this.stack[this.stack.length - 1];
    delete this.min[this.min.length - 1];
    // deleting the last slot in stack and min
    this.stack.length = this.stack.length - 1;
    this.min.length = this.min.length - 1;
};

/**
 * @return {number}
 */
//  returning the last element - does not delete
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
//  returns the smallest element
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

// t = O(1), this makes sense
// m = O(1), this could not be, because of the saving of the two stacks,
    // but since the stacks are called out side of each fn call, I think it make it constant

// The idea for the min stack and turtiary line isn't yours,
// but the this.stack[this.stack.length] is faster than using .push or .pop in their methods
// which is allowed, but seems like it shouldn't
// t = 81ms 91.84% | m = 49.72MB 50.74%
