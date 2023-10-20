var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        console.log("nums: ", nums);
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// ^^ would be quadradic, b/c indexOf goes through the whole arr. We have the while which uses index of as a condition and then another indexOf inside the while, making a nested loop situation.
