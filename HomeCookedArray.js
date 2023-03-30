class HomeCookedArray {
  constructor(elements, length) {
    this.data = elements || [];
    this.length = length || this.data.length || 0;

    /* Sparse array creation:
      If an array is built with a length longer than the provided element list,
      the rest of the array will be filled with undefined values.
    */
    if (this.length > this.data.length) {
      const difference = this.length - this.data.length;
      for (let i = 0; i < difference; i++) {
        this.data.push();
      }
    }
  }

  // Get an element at a specified index of the array
  at(index) {
    return this.data[index];
  }

  // Merge two or more arrays into one array
  concat(firstArray, ...moreArrays) {
    // Make a copy of the array's data and merge with the first array passed in
    let newArray = [...this.data];
    newArray = [...newArray, ...firstArray];

    // If more than one array is passed in, merge each of those as well
    if (moreArrays) {
      for (let i = 0; i < moreArrays.length; i++) {
        newArray = [...newArray, ...moreArrays[i]];
      }
    }

    // Return the changed copy, original array's this.data should not change
    return newArray;
  }

  // Run a callback function on each element of the array
  // Returns undefined
  forEach(callBackFn) {
    for (let i = 0; i < this.data.length - 1; i++) {
      callBackFn(this.data[i]);
    }
  }

  // Check if the passed in element is in this.data
  includes(element) {
    for (let i = 0; i < this.data.length - 1; i++) {
      if (this.data[i] == element) return true;
    }
    return false;
  }

  // Run a callback function on each element of the array
  // Returns a copy of the original array that's been mapped
  map(callBackFn) {
    // Make a copy of the array's data
    const newArray = [...this.data];

    // Run the callback function on each element of the copied array
    for (let i = 0; i < newArray.length - 1; i++) {
      callBackFn(newArray[i]);
    }

    return newArray;
  }

  // Add an element to the end of the array
  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  // Remove an element from the end of the array
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    // This prevents adding an <empty item> at the end of the array
    this.data.length = this.length;
  }
}

/* ----- Testing -----  */

const testArray = new HomeCookedArray(["test", "this"], 4);
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
