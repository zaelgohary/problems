// https://www.interviewbit.com/problems/repeat-and-missing-number-array/

function findDuplicate(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      return arr[i]
    }
    newArr.push(arr[i])
  }
}

function missingNumber(arr){
  let missing;
  for (let i = 0; i < arr.length; i++) {

  }
  return [findDuplicate(arr), missing]
}

const array = [3, 1, 2, 5, 3] 

console.log(missingNumber(array));