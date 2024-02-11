// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function: function solution(N: number): number;

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// N is an integer within the range [1..2,147,483,647].

function solution(N: number): number {
  const bin = (N >>> 0).toString(2)
  const length = bin.length
  let zeros = 0
  const gaps: number[] = []
  let hasOne = false
  
  if (N >= 1 && N < 2147483647) {
    for (let i = 0; i < length; i++) {
      if (+bin[i] === 1) {
        if (!hasOne) {
          hasOne = true;
          continue;
        }
        gaps.push(zeros)
        zeros = 0;
        continue;
      }
      zeros++
    }
  }

  return !gaps.length ? 0 : Math.max(...gaps);
}

console.log(solution(20));