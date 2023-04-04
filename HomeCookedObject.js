const HomeCookedObject = {
  // Copies one or more enumerable sources into a target object
  assign(target, ...sources) {
    if (sources.length > 1) {
      let targetObject = { ...target };
      for (let i = 0; i < sources.length; i++) {
        targetObject = { ...targetObject, ...sources[i] };
      }
      return targetObject;
    }
    return { ...target, ...sources[0] };
  },

  // Create a new HomeCookedObject
  create(prototype) {
    return { ...prototype };
  },

  // Transforms an object's key/value pairs into an array
  entries(object) {
    let arrayEntries = [];
    for (let key in object) {
      arrayEntries.push([key, object[key]]);
    }
    return arrayEntries;
  },

  // Transforms a list of key-value pairs into an object
  fromEntries(iterable) {
    let objectEntries = {};
    for (let key in iterable) {
      objectEntries = {
        ...objectEntries,
        [iterable[key][0]]: iterable[key][1],
      };
    }
    return objectEntries;
  },

  // Checks if a property is in an object, returns boolean answer
  hasOwn(object, property) {
    return property in object;
  },

  // Returns an array of a given object's property names
  keys(object) {
    let propertyNames = [];
    for (key in object) {
      propertyNames.push(key);
    }
    return propertyNames;
  },

  // Returns an array of a given object's values
  values(object) {
    let values = [];
    for (key in object) {
      values.push(object[key]);
    }
    return values;
  },
};

const testObject = HomeCookedObject.create({ test1: 1, test2: 2 });
const anotherTestObject = HomeCookedObject.create({ test3: 3, test4: 4 });
const yetAnotherTestObject = HomeCookedObject.create({ test5: 5, test6: 6 });
console.log("---", testObject);
const homeCookedEntries = HomeCookedObject.entries(testObject);
console.log("---", homeCookedEntries);
const homeCookedfromEntries = HomeCookedObject.fromEntries(homeCookedEntries);
console.log("---", homeCookedfromEntries);
console.log("---", HomeCookedObject.hasOwn(homeCookedfromEntries, "test1"));
console.log(HomeCookedObject.keys(testObject));
console.log(HomeCookedObject.values(testObject));
