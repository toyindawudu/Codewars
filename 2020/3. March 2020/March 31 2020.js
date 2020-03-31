// 1. Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
     //base case
     if (n <= 0){return 0};
     //different case
     return sum (arr, n-1) + arr[n-1];
  // Only change code above this line
}


// 2. Profile Lookup

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
// Only change code below this line
  // Create a for loop that goes through the contacts
    // Check to see if the name and prop are both true, then retrun the value of the property
    // If name doesn't match, return "No such contact"
    // if prop doesn't match, retuen "No such property"
  for (let i = 0; i < contacts.length; i++){
    if (contacts[i].firstName == name) {
    if (contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    } else { return "No such property"}
  } 
// Only change code above this line
  } 
  
  return "No such contact"; // This line of code as to be outside the for loop 

}

console.log(lookUpProfile("Akira", "likes"));

// 3. Generate Random Fractions with JavaScript

function randomFraction() {

  // Only change code below this line

  return Math.random();  // This generates a random decimal between 0 (inclusive of 0) and 1 (exclusive of 1)

  // Only change code above this line
}

// 4. Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}


// 5. Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}


// 6. Use the parseInt Function

function convertToInteger(str) {

  return parseInt(str); // This parses a strinf and returns an integer
}

convertToInteger("56");


// 7. Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str,2); 
}

convertToInteger("10011");


// 8. Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
