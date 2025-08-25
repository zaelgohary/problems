// Write a function:

// function solution(A: number[]): number;

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
import { inRange } from './helpers';

function findSmallestMissing(A: number[]): number {
  const N = A.length;
  let missing = 1;
  if (!inRange(N, 1, 100000)) return -1;
  const filtered = A.filter(a => a > 0).sort((a, b) => a - b);
  if (filtered.length === 0) return 1;
  for (let num of filtered) {
    if (num === missing) {
      missing++;
    }
    if (num > missing) {
      break;
    }
  }
  return missing;
}

findSmallestMissing([-1, -2, 1, 5, 7])