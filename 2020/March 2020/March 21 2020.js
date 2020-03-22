// 1. Copy Array Items Using slice()

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2,4);
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 2. Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr = [...arr];  // This copies all the element in arr
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
