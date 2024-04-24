
/**
 * https://leetcode.com/problems/implement-stack-using-queues/
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.


Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False


Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.


Follow-up: Can you implement the stack using only one queue?


 * @param {number} x
 * @return {void}
 */

// create an empty array
// return that array
var MyStack = function() {
    this.arr = [];
};
// t = O(1), needs to make an empty arr
// m = O(1), makes one thing

// perform normal array push functionality
// after don't use native push
    // add new length to array
        // set new value in new slot
MyStack.prototype.push = function(x) {
    this.arr.push(x);
};
// t = O(1)
// m = O(n), where n is the length of arr

/**
 * @return {number}
 */
// use pop - and then do not using pop
    // save last item to var
    // delete last item
    // return var item
MyStack.prototype.pop = function() {
    return this.arr.pop();
};
// t = O(1)
// m = O(1)

/**
 * @return {number}
 */
// return last value in array
MyStack.prototype.top = function() {
    let lastVal = this.arr[this.arr.length - 1];
    return lastVal;
};
// t = O(1)
// m = O(1)

/**
 * @return {boolean}
 */
// IF length is zero
    // return true
    // otherwise return false
MyStack.prototype.empty = function() {
    let isEmpty = this.arr.length === 0 ? true : false;
    return isEmpty;
};
// t = O(1)
// m = O(1)

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// Explanation
let myStack = new MyStack();
console.log(myStack, []);

myStack.push(1);
console.log(myStack, [1]);

myStack.push(2);
console.log(myStack, [1,2]);

myStack.top(); // return 2
console.log(myStack, [1,2]);

myStack.pop(); // return 2
console.log(myStack, [1]);

myStack.empty(); // return False
console.log(myStack, [1]);

myStack.pop(); // return 1
myStack.empty(); // return true
