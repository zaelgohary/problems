// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent (nums){
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j - 1]) {
        count++
      }
      console.log("count", count);
    }
    
  }
}

const nums = [8,1,2,2,3]

smallerNumbersThanCurrent(nums)
