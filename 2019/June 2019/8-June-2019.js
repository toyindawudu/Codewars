function abbrevName(name){

  // Change from a string into an array
  // Return the first character of each array 
  // Concatenate the first and second array with a . in the middle
  // Return the result of the concatenation

let arr = [];
let result = [];
let firstInitials = [];
let secondInitials = [];

arr = name.toUpperCase();
result= arr.split(" ");

firstInitials = result[0].charAt(0);
secondInitials = result[1].charAt(0);

result = firstInitials + "." + secondInitials;

return result;
}

console.log (abbrevName("Toyin Dawudu"));