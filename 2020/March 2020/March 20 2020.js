// Iterate Over All Properties

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

// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  // Only change code below this line

arr.unshift("I",2,'three');
arr.push(7,'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
