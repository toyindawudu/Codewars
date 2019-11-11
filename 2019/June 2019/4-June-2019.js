// CHALLENGE NUMBER 1

/*Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus.
wait is the number of people waiting to get on to the bus.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

*/

function enough(cap, on, wait) {
  // your code here
  //create a variable to store the result
  let result = 0;
  //subtract the amount of people on the bus from the capacity
  let remainder = cap - on;
  //subtract the amount waiting from the remainder 
  result = wait - remainder;
  // Return result
  
  //create control 
  
  if (result < 0){
    return 0}
  return result;
}

/*  Another solution

function enough(cap, on, wait) {
  if (on + wait < cap){
  return 0;
  } else {
  return (on + wait) - cap;
  }
}
*/


// CHALLENGE NUMBER 2



function litres(time) {
  // create a variable to store the result
  let result = 0;
  // 1 = 0.5 litres
  // 2 = 2 * 0.5 
  // 1.5 litres = 1.5 * 0.5
  // 6 litres = 
  // Create control logic for the amount of litres drank based on time
  
let realTime = Math.floor(time);

  if (realTime > 1.1) {
    return Math.floor(realTime * 0.5);
  } else if (realTime < 1.1) { 
    return 0;
    }

    return result;
}

console.log (litres(4));
console.log (litres(4.5));
console.log (litres(5.7));
console.log (litres(8965.2));


/* Another Solution

function litres(time) {
  return Math.floor(time * 0.5);
}
*/

