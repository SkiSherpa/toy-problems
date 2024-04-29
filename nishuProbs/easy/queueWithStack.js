// JS does not have a native stack data structure. An arr is what seems to be commonly used
var MyQueue = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
//  push to the back of stack
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
// save to a var
//  splice out first item from stack
    // delete first item
// return first item
MyQueue.prototype.pop = function() {
    let firstItem = this.stack[0];
    this.stack.splice(0,1);
    return firstItem;
};

/**
 * @return {number}
 */
//  return first item
MyQueue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
//  return true if lenght of stack is zero
MyQueue.prototype.empty = function() {
    let isEmpty = this.stack.length === 0 ? true : false;
    return isEmpty;s

};

// t = 53ms 41.65% | m 49.08MB 13.02%
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
