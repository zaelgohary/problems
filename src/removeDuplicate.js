// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i = i - 1
    }
  }
  return nums.length
};

const nums = [1,1,1,2,2,3,3,4]
removeDuplicates(nums)