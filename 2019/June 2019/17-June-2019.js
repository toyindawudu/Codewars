
// Question - Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}

// Question - Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  let result = "";
  //let words = str.split();
  let arrayString = str.split(" ");
  
  for (let i = arrayString.length - 1; i >= 0; i--) {
    result = result + arrayString[i] + " ";
    }

  return result.trim();
}

console.log (reverseWords("Thank God is Monday"));

