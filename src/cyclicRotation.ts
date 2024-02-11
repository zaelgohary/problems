function rotate(A: number[], K: number): number[] {
  const length = A.length
  let rotatedArr: number[] = []
  
  const between = (x: number, min: number, max: number) => {
    return x >= min && x <= max
  }

  if (between(length, 1, 100) && between(K, 1, 100) && K !== length) {
    while(K > 0){
      let last = A[A.length-1];
      rotatedArr[0] = last

      for (let i = 0; i < length - 1; i++) {
        if (between(A[i], -1000, 1000)) {
          rotatedArr.push(A[i])
        }
      }
      A = rotatedArr;
      rotatedArr = []
      K--
    }
  }
  
  return A
}

rotate([3, 8, 9, 7, 6], 2)