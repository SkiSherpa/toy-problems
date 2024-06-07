/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).


Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-10^4 <= target <= 10^4

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// sort the list
// have one fixed number - loop
// two pointers one at start and end of remaining nums - loop
// IF sum of all three are more than target
    // move end pointer -1
// otherwise, start pointer ++

var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let sum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i <= nums.length; i++) {
        let cur = nums[i];
        let l = i+1;
        let r = nums.length - 1;
        console.log(nums.length, i)
        while (l < r) {
            tempSum = cur + nums[r] + nums[l]
            if (Math.abs(tempSum - target) <= Math.abs(sum - target)) {
                sum = tempSum
            }
            if (tempSum === target) {
                return sum
            } else if (tempSum > target) {
                r--;
            } else {
                l++;
            }
        }
    }
    return sum;
};
// nums = [-1,2,1,-4], target = 1
// console.log(threeSumClosest([-1, 2, 1, 4], 1), 2)
// console.log(threeSumClosest([0,0,0], 1), 0)
// console.log(threeSumClosest([0,1,2], 0), 3) // 91/102
let ip96 = [13,252,-87,-431,-148,387,-290,572,-311,-721,222,673,538,919,483,-128,-518,7,-36,-840,233,-184,-541,522,-162,127,-935,-397,761,903,-217,543,906,-503,-826,-342,599,-726,960,-235,436,-91,-511,-793,-658,-143,-524,-609,-728,-734,273,-19,-10,630,-294,-453,149,-581,-405,984,154,-968,623,-631,384,-825,308,779,-7,617,221,394,151,-282,472,332,-5,-509,611,-116,113,672,-497,-182,307,-592,925,766,-62,237,-8,789,318,-314,-792,-632,-781,375,939,-304,-149,544,-742,663,484,802,616,501,-269,-458,-763,-950,-390,-816,683,-219,381,478,-129,602,-931,128,502,508,-565,-243,-695,-943,-987,-692,346,-13,-225,-740,-441,-112,658,855,-531,542,839,795,-664,404,-844,-164,-709,167,953,-941,-848,211,-75,792,-208,569,-647,-714,-76,-603,-852,-665,-897,-627,123,-177,-35,-519,-241,-711,-74,420,-2,-101,715,708,256,-307,466,-602,-636,990,857,70,590,-4,610,-151,196,-981,385,-689,-617,827,360,-959,-289,620,933,-522,597,-667,-882,524,181,-854,275,-600,453,-942,134]
console.log(threeSumClosest(ip96, -2805), -2805) // 96/102
// console.log(threeSumClosest([-1, -2, -3, -4, -5 ], -10), -10)
// got a bit stuck on the ip96, due to not handling the sort
// t = O(n^2), where n is the length of nums
    // due to nest loops
// m = O(1)
