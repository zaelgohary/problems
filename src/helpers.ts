export function hasDuplicates(A: number[]): boolean {
  return new Set(A).size !== A.length;
}

export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}