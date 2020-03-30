//  1. Iterate Through an Array with a For loop

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;            // Declared and initialised a variable total to 0
for (let i = 0; i < myArr.length; i++){     // Created a for loop 
    total += myArr[i];                      // Add total with myArr[i]
    i+1;                                    // Move to the next element in the array
    console.log(total);                     // Console log the variable total 
}


// 2. Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Create a for loop
  for (let i = 0; i < arr.length; i++){
    // Create a secondary for loop for the primary
    for (let j = 0; j < arr[i].length; j++){
      //multiply each element with product
      product = arr[i][j] * product;
    }
  }

  // Only change code above this line
  return product;
}