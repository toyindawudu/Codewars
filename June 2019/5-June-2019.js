function squareSum(numbers){
  //create a place for the result

  let result = [];
  let victory = [];

  // create a for loop for the numbers,
  for (let i = 0; i < numbers.length; i++) {
   // multiply them
  let multiplyNumber = numbers[i] * numbers[i];
  
  victory = result.push(multiplyNumber);

  }

  const squaredResult = victory.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    },0);
  
return victory;
}

console.log (squareSum(numbers[3,4,5,6]));
