// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Brute Force Solution
function markRow(matrix, m = matrix[0].length, i){
  for(let j = 0; j < m; j++){
    if(matrix[i][j] !== 0){
      matrix[i][j] = "a"
    }
  }
}

function markCol(matrix, n = matrix.length, j){
  for(let i = 0; i < n; i++){
    if(matrix[i][j] !== 0){
      matrix[i][j] = "a"
    }
  }
}


function setZeroes(matrix, n = matrix.length, m = matrix[0].length){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(matrix[i][j] === 0){
        markRow(matrix, m, i)
        markCol(matrix, n, j)
      }
    }
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == "a") {
        matrix[i][j] = 0
      }
    }  
  }
  console.log("matrix", matrix);
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]]

console.log(setZeroes(matrix));
