// https://app.codility.com/c/run/trainingSRWGM2-W7A/

function countDiv(A: number, B: number, K: number): number {
  let divisibleNumbers = 0
  const between = (val: number, min: number, max: number) => {
    return val >= min && val <= max;
  };

  if (
    between(A, 0, 2000000000) &&
    between(B, 0, 2000000000) &&
    between(K, 1, 2000000000) &&
    A <= B
  ) {
    divisibleNumbers = Math.floor(B / K) - Math.floor((A - 1) / K);
  }
  
  return divisibleNumbers;
}

countDiv(6, 11, 2);
