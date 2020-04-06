//1. Highest and Lowest

function highAndLow(numbers){
  // Initialise variables
  let sortedNumbers = numbers;
  let lowestNumber;
  let highestNumber;

  // Split the string in the numbers
  sortedNumbers = numbers.split(' ');
  // Sort string using the .sort() methods

  lowestNumber = sortedNumbers[0];
  highestNumber = sortedNumbers.length-1;

  // lowestNumbers = sortedNumbers.charCodeAt(0);
  // highestNumber = sortedNumbers.charCodeAt(-1);

  //result = highestNumber + ' ' + lowestNumber;

  result = lowestNumber.concat(' ', highestNumber);

  return result;

}

console.log(highAndLow("5 4 -4 3 1"));
