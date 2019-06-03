let vals = [5,4,2,4,6,9];

function sum (acc, val) {
  return acc * val;
}

let answer = vals.reduce(sum);

console.log (answer);