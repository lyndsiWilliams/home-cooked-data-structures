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

  // Returns the boundary prop if it exists, else returns a default value
  _boundaryCheck = (boundary, defaultValue) => boundary ?? defaultValue;

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

  /* Checks whether all elements in the array pass the test passed into
    the function, returns a boolean value */
  every(checkFn) {
    let answer;
    for (let i = 0; i < this.length; i++) {
      answer = checkFn(this.data[i]);
    }
    return answer;
  }

  /* Changes all elements in an array to a static value, from a start index (default 0)
    to an end index (default array.length). It returns the modified array. */
  fill(value, start, end) {
    for (
      let i = this._boundaryCheck(start, 0);
      i < this._boundaryCheck(end, this.length);
      i++
    ) {
      this.data[i] = value;
    }
    return this.data;
  }

  /* Returns the first element in the provided array that satisfies the provided function.
    If no values satisfy the testing function, undefined is returned. */
  find(checkFn) {
    for (let i = 0; i < this.length; i++) {
      if (checkFn(this.data[i]) === true) return this.data[i];
    }
    return undefined;
  }

  /* Returns the index of the first element in the provided array that satisfies the
    provided function. If no values satisfy the testing function, -1 is returned. */
  findIndex(checkFn) {
    for (let i = 0; i < this.length; i++) {
      if (checkFn(this.data[i]) === true) return i;
    }
    return -1;
  }

  /* Returns the last element in the provided array that satisfies the provided function.
    If no values satisfy the testing function, undefined is returned. */
  findLast(checkFn) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (checkFn(this.data[i]) === true) return this.data[i];
    }
    return undefined;
  }

  /* Returns the index of the last element in the provided array that satisfies the
    provided function. If no values satisfy the testing function, -1 is returned. */
  findLastIndex(checkFn) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (checkFn(this.data[i]) === true) return i;
    }
    return -1;
  }

  // Run a callback function on each element of the array, returns undefined
  forEach(callBackFn) {
    for (let i = 0; i < this.length; i++) {
      callBackFn(this.data[i]);
    }
  }

  // Check if the passed in element is in this.data
  includes(element) {
    for (let i = 0; i < this.length - 1; i++) {
      if (this.data[i] == element) return true;
    }
    return false;
  }

  /* Run a callback function on each element of the array
    Returns a copy of the original array that's been mapped */
  map(callBackFn) {
    // Make a copy of the array's data
    const newArray = [...this.data];

    // Run the callback function on each element of the copied array
    for (let i = 0; i < newArray.length; i++) {
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

module.exports = HomeCookedArray;
