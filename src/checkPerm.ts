// https://app.codility.com/c/run/trainingYSECJW-CCQ/

function checkPerm(A: number[]): number {
  const min = 1;
  const max = Math.max(...A)
  const length = A.length;
  let maxRange = 1000000000;
  const hasDuplicates = new Set(A).size !== length

  const between = (val: number, min: number, max: number) => {
    return val >= min && val <= max;
  };

  const isValidArr = () =>
    A.some((v) => {
      return v >= 1 && v <= maxRange;
    });

  if (
    A.includes(min) &&
    A.length === max &&
    between(length, 1, 100000) &&
    isValidArr() &&
    !hasDuplicates
  ) {
    console.log(1);
    return 1;
  }
  console.log(0);
  return 0;
}

checkPerm([9, 5, 7, 3, 2, 7, 3, 1, 10, 8]);
