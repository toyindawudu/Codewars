
/*Question
You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

*/


function otherAngle(a, b) {
  //create a place to store the result
  let result;
  // add the two give angles together
  let givenAngles = a + b;
  // Subtract the given angles from 180 degrees
  result = 180 - givenAngles;
  // Return the result
  return result;
}