// https://app.codility.com/c/run/trainingBFVUEC-9QV/

function solution(A: number[]): number {
  let uniqueVals = 0
  const length = A.length
  const between = (val: number, min: number, max: number) => {
    return val >= min && val <= max;
  };

  const isValidVal = A.some(v => {return v >= -1000000 && v <= 1000000})

  if(between(length, 0, 100000) && isValidVal){
  uniqueVals = new Set(A).size
  }
  return uniqueVals
}