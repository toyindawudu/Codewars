/* Question 

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/


function positiveSum(arr) {

  for(var i = 0; i < arr.length; i++); { // create a condition for positive numbers only
    if (arr[i]>= 0){
    var positiveArray = positiveNumber.push(arr[i]);
    return positiveArray;
    } 

    let number = 0;
    positiveArray.forEach((item=>number += item));
    return 
    
    /* for (var j = 0; j < positiveNumber.length; j++) {
    sumAddition = sumAddition + positive [i];
    }
    return sumAddition; */
  }
}

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers){
  let result = numbers;
  result.split(' ');

  let tempNumbers = numbers.sort ((a,b) => {
    return a -b;
  });

  let largest = tempNumbers.pop();
  let smallest = tempNumbers.shift();
 // return largest; 
  return smallest;
}

//console.log (highAndLow (["1 -9 4 2 7"]));

/* function stringToArray(string){
  // Store the string in a variable 
  let result = string; 
  // Split and return the string according to the space in the string
  return result.split(' ');
	// code code code

} */


// Still working

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}