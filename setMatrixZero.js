// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Brute Force Solution
function markRow(matrix, i){
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1
    }
  }
}

function markCol(matrix, j){
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1
    }
  }
}

function setZeros(matrix){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 0){
        markRow(matrix, i)
        markRow(matrix, j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
}


const matrix = [[1,1,1],[1,0,1],[1,1,1]]

console.log(setZeros(matrix));
