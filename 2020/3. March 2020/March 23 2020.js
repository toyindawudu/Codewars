// 1. Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // We use the spread operator to copy the elements from fragment
  return sentence;
}

console.log(spreadOut());


//2. Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  // Only change code below this line

  if (arr.indexOf(elem)>=0 ){ // This allows me to check the array.
    return true;
  } else {
    return false;
  }
  
  

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


