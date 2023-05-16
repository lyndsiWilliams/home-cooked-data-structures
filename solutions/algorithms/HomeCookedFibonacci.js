// O(N)
function fibonacciIterative(n) {
  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }

  return fibArray[n];
}

// O(2^N) - exponential time
function fibonacciRecursive(n) {
  return n < 2 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

module.exports = { fibonacciIterative, fibonacciRecursive };
