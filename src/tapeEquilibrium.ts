function solution(A: number[]): number{
  let left = A[0]
  let right = (A.reduce((a: number, b: number) => a + b, 0)) - left
  let sum = Math.abs(left - right)
  const length = A.length

  const inRange = (n: number, min: number, max: number) => {
    return n >= min && n <= max;
  }
  for (let i = 1; i < length - 1; i++) {
    if (inRange(length, 2, 100000) && inRange(A[0], -1000, 1000) && inRange(A[i], -1000, 1000)) {
      left += A[i]
      right -= A[i]
      const innerSum = Math.abs(left - right)   
      if (sum > innerSum) {
        sum = innerSum
      }
    } else {
      return 0;
    }
  }

  return sum;
}

solution([3, 1, 2, 4, 3])