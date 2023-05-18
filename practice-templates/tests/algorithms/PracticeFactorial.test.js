const mockFactorialFunctions = require("../../algorithms/PracticeFactorial");

const { findFactorialIterative, findFactorialRecursive } =
  mockFactorialFunctions;

describe.skip("Factorial functions", () => {
  test("iterativaly finds the factorial of the number passed in", () => {
    expect(findFactorialIterative(5)).toBe(120);
    expect(findFactorialIterative(6)).not.toBe(120);
  });

  test("recursively finds the factorial of the number passed in", () => {
    expect(findFactorialRecursive(5)).toBe(120);
    expect(findFactorialRecursive(6)).not.toBe(120);
  });
});
