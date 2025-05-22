// https://app.codility.com/c/run/training3NHB63-MMB/

// https://app.codility.com/c/run/demo6G3RU2-MCQ/

function findMissing(A: number[]): number {
  const filteredArr = new Set(A);
  const length = filteredArr.size;
  let missing = 1;
  const max = Math.max(...filteredArr);

  const between = (n: number, min: number, max: number) => {
    return n >= min && n <= max;
  };

  if (
    between(length, 1, 100000) &&
    between(missing, -1000000, 1000000) &&
    filteredArr.has(missing)
  ) {
    while (missing <= max) {
      if (filteredArr.has(missing)) {
        missing++;
        continue;
      }
      return missing;
    }
  }
  console.log(missing);
  
  return missing;
}

findMissing([2, 3, 5, 1]);
