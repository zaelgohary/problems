function solution(A: number[]): number {
  const length = A.length
  let count = 0;
  if (length %2 !== 0 && length >= 1 && length <= 1000000) {
    for (let i = 0; i < length; i++) {
      if (A[i] % 1 === 0 && A[i] >= 1 && A[i] < 1000000000) {
        count = count ^ A[i]
        console.log("count", count);
      } else {
        return 0;
      }
    } 
  }
  
  return count
}

solution([9, 3, 9, 3, 9, 7, 9]);
