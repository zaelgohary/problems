import { describe, it, expect } from 'vitest'
import { findDuplicate } from "./findDuplicate.mjs"


describe("findDuplicate", () => {
  it("should take an argument of type array", () => {
    const arg1 = [1, 2, 2]
    const arg2 = 1
    const arg3 = "test"

    const result = findDuplicate(arg1);
    const resultlFn = () => {
      findDuplicate(arg2);
    }
    const resultFn2 = () => {
      findDuplicate(arg3);
    }

    expect(result).toBeDefined();
    expect(resultlFn).toThrow();
    expect(resultFn2).toThrow();
  })

  it("should return the duplicate number", () => {
    const arr = [1, 2, 2]

    const result = findDuplicate(arr);

    expect(result).toBe(2);
  })

  it("should throw an error if an empty array was passed", () => {
    const arr = []

    const result = () => findDuplicate(arg);

    expect(result).toThrow()
  })

})