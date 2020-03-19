/* 

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."

*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function (){return "This dog has " + dog.numLegs + " legs" + ".";}
};

console.log (dog.sayLegs());


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