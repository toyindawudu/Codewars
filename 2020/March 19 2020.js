// This challenge is based on the use of Constructor Function

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}


// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog(){
  this.name = "Frank";
  this.color = "black";
  this.numLegs = 4;
}

// We are trying to extend the Constructors to Receive Arguments. So we created a Dog constructor to take the 
//arguements, name and color. 

function Dog(name,color) {
  this.name = name;
  this.color= color;
  this.numLegs = 4;
}

let terrier = new Dog ( "Sam", "Black");

console.log(terrier); // terrier will inherit the property "numLegs'. This number will ALWAYS be 4

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House (6);

console.log(myHouse instanceof House); // This result displays true in the browser

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}