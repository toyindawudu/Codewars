/* 
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// Create a function for BMI
function bmi(weight,height) {
  // Create a place to store the result
  let result;
  result = (weight / (height * height));
 
  // Create a logic for the result
  
  if (result <= 18.5) {
    return result = 'Underweight';
  } else if ( result <= 25.0) {
    return result = 'Normal';
  } else if (result <= 30.0) {
    return result = 'Overweight';
  } else (result > 30) 
    return result = 'Obese';

}

//console.log (bmi (50, 1.50));


// Another Solution for checking BMI

/* 

function bmi(weight, height) {
 let bmi = weight / (height * height);
 switch(true){
   case bmi <= 18.5:
     return "Underweight";
   case bmi <= 25.0:
     return "Normal";
   case bmi <= 30.0:
     return "Overweight";
   case bmi > 30:
     return "Obese";
  }
}

*/

function stringToArray(string){
  // Store the string in a variable 
  let result = string; 
  // Split and return the string according to the space in the string
  return result.split(' ');
	// code code code

}

console.log(stringToArray('Frank Sawyer'));