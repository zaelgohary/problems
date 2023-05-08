// Find the repeating and missing numbers
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

 function repeatedNumber(A){
  // loop over an array to and compare the smallest int and biggest int
  // check if number is repeated while looping
  let currentInt;
  let repeatedInt;
  let newArray = [];
  for (let i = 0; i < A.length; i++) {
    currentInt = A[i];

    if (!newArray.includes(currentInt)) {
      newArray.push(currentInt)
    } else{
      repeatedInt = currentInt
    }
  }
  return repeatedInt;
}

function missingNumber(A){
  let currentInt;
  let smallestInt;
  let biggestInt;
  let missingInt
  let newArray = [];
  for (let i = 0; i < A.length; i++) {
    currentInt = A[i];

    if (!newArray.includes(currentInt)) {
      if (newArray.length === 0) {
        newArray.push(currentInt)
      } else if(currentInt < newArray[0]){
        smallestInt = currentInt
        console.log("smallestInt", smallestInt);
        newArray.unshift(currentInt)
      } else {
        biggestInt = currentInt
        console.log("biggestInt", biggestInt);
        newArray.push(currentInt)
      }
    } else{
      console.log("repeated", currentInt);
    }
  }
  console.log("newArray", newArray);
  return missingInt
}

const array = [3, 1, 2, 5, 3];

console.log(missingNumber(array));