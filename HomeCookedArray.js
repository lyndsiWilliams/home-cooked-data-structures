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
    let copyArray = [...this.data];
    copyArray = [...copyArray, ...firstArray];

    // If more than one array is passed in, merge each of those as well
    if (moreArrays) {
      for (let i = 0; i < moreArrays.length; i++) {
        copyArray = [...copyArray, ...moreArrays[i]];
      }
    }

    // Assign the changed copy to the array's data property
    this.data = copyArray;
    return this.data;
  }

  // Check if the passed in element is in this.data
  includes(element) {
    for (let i = 0; i < this.data.length - 1; i++) {
      if (this.data[i] == element) return true;
    }
    return false;
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
console.log(testArray);
testArray.push("another");
console.log(testArray);
testArray.pop();
console.log(testArray);
testArray.concat(
  ["testArray1"],
  ["testArray2.1", "testArray2.2"],
  ["testArray3"]
);
console.log(testArray.includes("this"));