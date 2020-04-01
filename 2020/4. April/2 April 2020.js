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
