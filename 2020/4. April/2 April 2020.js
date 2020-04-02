//1. Beginner Series #1 School Paperwork

/*
 
Question - Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:

paperwork(5, 5) == 25

*/

function paperwork(n, m) {
  // if n or m is less than 0
  if ( n < 0|| m < 0){ return 0;}
  return n * m;

}


/*

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

Consider an Example :
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

*/

function expressionMatter(a, b, c) {

  // initialise  an array for the final result and a variable for the highest number
  let finalResult =[];
  let highestNum = 0;

  // do the math for the array and push into the array

  finalResult.push (a * (b + c));
  finalResult.push (a * b + c); 
  finalResult.push (a * b * c);
  finalResult.push(a + b * c); 
  finalResult.push((a + b) * c);
  finalResult.push((a + b + c));

  // sort through the array in descending order

  finalResult.sort(function(a, b){return b-a});

  // Pick highest number
  highestNum = finalResult[0];

  // return the highest number
  return highestNum;// highest achievable result
}

console.log(expressionMatter(1,1,1));