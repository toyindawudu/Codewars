/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/


//create a function to square the numbers in the array

function squared (num){
  return num * num
}


function squareSum(numbers){
  //create a place for the result

  let result = [];


  // create a for loop for the numbers,
  for (let i = 0; i < numbers.length; i++) {
   // multiply them
  //let multiplyNumber = numbers[i] * 2 ;
  let multiplyNumber =  squared(numbers[i]);
  
  result.push(multiplyNumber);
  }
  
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
  sum = sum + result[i]
}
  
  

return sum;
}
