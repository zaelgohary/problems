// Bubble sort
// compare current index with next. if bigger, swap


function sort(nums){
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
      }
    }
  }
  return nums
}

function swap(nums, i, j){
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

const nums = [6, 8, 4, 5, 2, 9]

sort(nums);