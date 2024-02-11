function findMissingNum(A: number[]): number {
  const length = A.length;
  let missing = 1
  const max = length + 1;
  const hasDuplicates = new Set(A).size !== length;

  const between = (n: number, min: number, max: number) => {
    return n >= min && n <= max;
  };

  if (between(length, 1, 100000) &&
    !hasDuplicates &&
    between(missing, 1, max)
  ) {
    if (!A.includes(max)) {
      return max
    }
    if (!A.includes(missing)) {
      return missing
    }
    while (missing < max) {
      if (A.includes(missing)) {
        missing++;
        continue;
      }
      return missing;
    }
  } 
  return 1;
}

findMissingNum([2, 3, 1, 5]);
