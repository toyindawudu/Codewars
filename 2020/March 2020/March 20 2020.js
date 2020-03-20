// 1. Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

/////////////////

//Decided to go back to the Basic structures  as I was struggling to remember

/////////////////////////

// 2. dd Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  // Only change code below this line

arr.unshift("I",2,'three');
arr.push(7,'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


// 3. Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 4. Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
    let newArr = arr.splice(1,4); // The 1st parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete
// Only change code above this line
console.log(arr);


// 5. Add Items Using splice()

function htmlColorNames(arr) {
  // Only change code below this line
  const startIndex = 0;   //const startIndex = 0; This is the starting index where you start
  const amountToDelete = 2; // This deletes from the startIndex
  const amountToDelete = 2;
  arr.splice(startIndex,amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// Copy Array Items Using slice()


