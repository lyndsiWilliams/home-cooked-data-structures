const mockFactorialFunctions = require("../../algorithms/HomeCookedFactorial");

const { findFactorialIterative, findFactorialRecursive } =
  mockFactorialFunctions;

describe("Factorial functions", () => {
  test("iterativaly finds the factorial of the number passed in", () => {
    expect(findFactorialIterative(5)).toBe(120);
    expect(findFactorialIterative(6)).not.toBe(120);
  });

  test("recursively finds the factorial of the number passed in", () => {
    expect(findFactorialRecursive(5)).toBe(120);
    expect(findFactorialRecursive(6)).not.toBe(120);
  });
});
