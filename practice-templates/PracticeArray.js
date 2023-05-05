class PracticeArray {
  constructor(elements, length) {
    this.data = elements || [];
    this.length = length || this.data.length || 0;

    /* Sparse array creation:
      If an array is built with a length longer than the provided element list,
      the rest of the array will be filled with undefined values.
    */
    if (this.length > this.data.length) {
    }
  }

  // Returns the boundary prop if it exists, else returns a default value
  _boundaryCheck = (boundary, defaultValue) => boundary ?? defaultValue;

  // Get an element at a specified index of the array
  at(index) {}

  // Merge two or more arrays into one array
  concat(firstArray, ...moreArrays) {
    // Make a copy of the array's data and merge with the first array passed in
    // If more than one array is passed in, merge each of those as well
    // Return the changed copy, original array's this.data should not change
  }

  /* Checks whether all elements in the array pass the test passed into
    the function, returns a boolean value */
  every(checkFn) {}

  /* Changes all elements in an array to a static value, from a start index (default 0)
    to an end index (default array.length). It returns the modified array. */
  fill(value, start, end) {}

  /* Returns the first element in the provided array that satisfies the provided function.
    If no values satisfy the testing function, undefined is returned. */
  find(checkFn) {}

  /* Returns the index of the first element in the provided array that satisfies the
    provided function. If no values satisfy the testing function, -1 is returned. */
  findIndex(checkFn) {}

  /* Returns the last element in the provided array that satisfies the provided function.
    If no values satisfy the testing function, undefined is returned. */
  findLast(checkFn) {}

  /* Returns the index of the last element in the provided array that satisfies the
    provided function. If no values satisfy the testing function, -1 is returned. */
  findLastIndex(checkFn) {}

  // Run a callback function on each element of the array, returns undefined
  forEach(callBackFn) {}

  // Check if the passed in element is in this.data
  includes(element) {}

  /* Run a callback function on each element of the array
    Returns a copy of the original array that's been mapped */
  map(callBackFn) {
    // Make a copy of the array's data
    // Run the callback function on each element of the copied array
  }

  // Add an element to the end of the array
  push(element) {}

  // Remove an element from the end of the array
  pop() {
    // This prevents adding an <empty item> at the end of the array
  }
}

/* ----- Testing -----  */

const testArray = new PracticeArray(["test", "this"], 4);
console.log("--- Creation test:", testArray);
testArray.push("another");
console.log("--- Push test:", testArray);
testArray.pop();
console.log("--- Pop test:", testArray);
const anotherTestArray = testArray.concat(
  ["testArray1"],
  ["testArray2.1", "testArray2.2"],
  ["testArray3"]
);
console.log(
  "--- Concat test:",
  "-Original-",
  testArray,
  "-Catted-",
  anotherTestArray
);
console.log("--- Includes test:", testArray.includes("this"));
console.log("--- ForEach test:");
anotherTestArray.forEach((item) => console.log("forEach", item));
const mappedTestArray = testArray.map((item) => console.log("map", item));
console.log("--- Map test:", mappedTestArray);
const numbers = new PracticeArray([1, 30, 39, 29, 10, 13]);
console.log(
  "--- Every test:",
  numbers.every((currentValue) => currentValue < 40) // true
);
console.log("--- Fill test", numbers.fill(6, 2, 4));
console.log(
  "--- Find test",
  numbers.find((element) => element > 10)
);
console.log(
  "--- FindIndex test",
  numbers.findIndex((element) => element > 10)
);
console.log(
  "--- FindLast test",
  numbers.findLast((element) => element > 10)
);
console.log(
  "--- FindLastIndex test",
  numbers.findLastIndex((element) => element > 10)
);
const notFlatNumbers = new PracticeArray([1, 2, [3, 4]]);
console.log(notFlatNumbers.flat());
