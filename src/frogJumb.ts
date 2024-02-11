// https://app.codility.com/c/run/trainingN56KWP-AQ7/

// Count the minimal number of jumps that the small frog must perform to reach its target.
function countjmb(X: number, Y: number, D: number): number {
  let jmb = 0;

  const between = (value: number, min: number, max: number) => {
    return value >= min && value <= max;
  };

  if (
    between(X, 1, 1000000000) &&
    between(Y, 1, 1000000000) &&
    between(D, 1, 1000000000) &&
    X <= Y
  ) {
    while (X < Y) {
      X += D;
      jmb++;
    }
  }
  return jmb;
}

countjmb(10, 85, 30);
