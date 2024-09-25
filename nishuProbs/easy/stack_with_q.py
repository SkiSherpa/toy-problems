# Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

# Implement the MyStack class:

# void push(int x) Pushes element x to the top of the stack.
# int pop() Removes the element on the top of the stack and returns it.
# int top() Returns the element on the top of the stack.
# boolean empty() Returns true if the stack is empty, false otherwise.
# Notes:

# You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
# Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.


# Example 1:

# Input
# ["MyStack", "push", "push", "top", "pop", "empty"]
# [[], [1], [2], [], [], []]
# Output
# [null, null, null, 2, 2, false]

# Explanation
# MyStack myStack = new MyStack();
# myStack.push(1);
# myStack.push(2);
# myStack.top(); // return 2
# myStack.pop(); // return 2
# myStack.empty(); // return False

# !!! Remember you can only push into the back of the array
# b/c their queues, and pull from the front
# This is why you need to use two arr's for pop
class MyStack:

    def __init__(self):
        self.q = []
        self.hold = []
    # push to the back of the list
    def push(self, x: int) -> None:
        self.q.append(x)

    # returns the last element of the list and deletes it
    def pop(self) -> int:
        item = self.q[0]
        while len(self.q):
            item = self.q[0]
            if len(self.q) == 1:
                break
            self.hold.append(item)
            self.q = self.q[1:]
        self.q = self.hold
        self.hold = []
        return item

    # return what the last element is
    def top(self) -> int:
        return self.q[len(self.q) - 1]

    # If there is any length in the q
    def empty(self) -> bool:
        l = len(self.q)
        if l > 0:
            return False
        return True



# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
