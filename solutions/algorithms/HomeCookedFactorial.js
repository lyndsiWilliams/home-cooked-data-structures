// O(N)
function findFactorialRecursive(number) {
  return number <= 2 ? number : number * findFactorialRecursive(number - 1);
}

// O(N)
function findFactorialIterative(number) {
  let answer = 1;

  for (i = 2; i <= number; i++) answer *= i;

  return number <= 2 ? number : answer;
}

module.exports = { findFactorialIterative, findFactorialRecursive };
