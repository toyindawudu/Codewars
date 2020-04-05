// 1. create your first JS function and print "Helloworld!"

function helloWorld() {
  // creates variable called str to str that equals Hello World
  var str = "Hello World!";
  // prints the variable str to the console
  console.log(str);
};

// technically you would type in helloWorld down here to 
// run the function


// 2. Find the Difference in Age between Oldest and Youngest Family Members - 8 kyu

function differenceInAges(ages){
  // Create variables for newAges and differenceInAges for the new array of ages and the final result
  let newAges = [];
  let difference = 0;
  // Sort through the array in descending order
  newAges = ages.sort(function(a,b){return a -b });
  // Subtract newAges[0] - newAges.length-1 
  difference = newAges[newAges.length-1] - newAges[0];
  //return new array with youngest, oldest and difference in the ages;
  //return [newAges.length-1, newAges[0], difference];
  return [newAges[0], newAges[newAges.length-1], difference];
}

/*  Another solution 

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

*/

// differenceInAges(50,48,33,56,75,93,34);
let ages = [82, 15, 6, 38, 35];
differenceInAges(ages);
console.log(ages);
console.log(differenceInAges(ages));


//3. Calculate BMI

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