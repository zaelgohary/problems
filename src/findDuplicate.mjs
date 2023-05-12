// https://leetcode.com/problems/find-the-duplicate-number/description/

export function findDuplicate(arr){
  if (!Array.isArray(arr)) {
    throw new Error("Argument has to be of type array.")
  }
  
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      return arr[i]
    }
    newArr.push(arr[i])
  }
}

const nums = [1, 3, 4, 2, 2]
console.log(findDuplicate(nums));
