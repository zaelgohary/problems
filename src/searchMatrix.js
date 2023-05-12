// Problem Statement: Given an m*n 2D matrix and an integer, write a program to find if the given integer exists in the matrix.

function searchMatrix(matrix, target){
  let answer;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (target === matrix[i][j]) {
        answer = true
      } else{

        answer = false
      }
    }    
  }
  return answer;
}
const matrix = 
[[1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]]
console.log("searchMatrix", searchMatrix(matrix, 100));