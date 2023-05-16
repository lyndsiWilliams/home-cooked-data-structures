// import { fibonacciIterative, fibonacciRecursive } from "./HomeCookedFibonacci";
const fibonacciFunctions = require("../../algorithms/HomeCookedFibonacci");

const { fibonacciIterative, fibonacciRecursive } = fibonacciFunctions;

describe("Fibonacci functions", () => {
  test("iteratively finds the fibonacci number at the index", () => {
    expect(fibonacciIterative(6)).toBe(8);
    expect(fibonacciIterative(7)).not.toBe(8);
  });

  test("recursively finds the fibonacci number at the index", () => {
    expect(fibonacciRecursive(6)).toBe(8);
    expect(fibonacciRecursive(7)).not.toBe(8);
  });
});
