// https://app.codility.com/c/run/trainingKYG7MD-MT9/
import { inRange } from './helpers';

function solution(A: number[]): number {
  const N = A.length
  let count = 0;
  if (N %2 !== 0 && inRange(N, 1, 1000000)) {
    for (let i = 0; i < N; i++) {
      if (A[i] % 1 === 0 && inRange(A[i], 1, 1000000000)) {
        count = count ^ A[i]
      } else {
        return 0;
      }
    } 
  }
  return count
}

solution([9, 3, 9, 3, 9, 7, 9]);


// function getOddOccurence(A: number[]): number {
//   const N = A.length;
//   let arrMap = new Map<number, number>();
//   let arr: number[] = [];
//   if (N % 2 === 0 && !inRange(N, 1, 1000000)) return 0;
//   for (let i = 0; i < N; i++) {
//     if (!inRange(A[i], 1, 1000000000)) return 0;
//     if (!arrMap.has(A[i])) {
//       arrMap.set(A[i], 1);
//     } else {
//       arrMap.set(A[i], arrMap.get(A[i])! + 1);
//     }
//     console.log("arrMap", arrMap);
//   }

//   for (const [key, value] of arrMap.entries()) {
//     if (value % 2 !== 0) arr.push(key);
//   }
//   return arr.length > 1 ? 0 : arr[0];
// }

// getOddOccurence([9, 3, 9, 3, 9, 7, 9]);