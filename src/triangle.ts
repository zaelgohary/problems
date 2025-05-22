// https://app.codility.com/programmers/lessons/6-sorting/triangle/

function hasTriangle(A: number[]): number {
  const filteredArr = A.filter((a) => a > 0).sort((a, b) => a - b);
  const filteredArrLen = filteredArr.length;
  const triangleArr: number[] = [];

  console.log(filteredArr);
  
  for (let i = 0; i < filteredArrLen; i++) {
    if (A.some(a => !!(a > filteredArr[i]))) {
      triangleArr.push(filteredArr[i])
      console.log("A.some", A.filter(a => a > filteredArr[i]));
      
      console.log("AAAAAA",A[i]);
    }
    // const P = filteredArr[i];
    // const Q = filteredArr[i + 1];
    // const R = filteredArr[i + 2];
    // console.log(P, Q, R);
    // if (P + Q > R && R < A.length) {
      
    //   console.log(1);
    //   return 1;
    // }
  }

  console.log(0);
  return 0;
}

hasTriangle([10, 2, 5, 1, 8, 20]);
