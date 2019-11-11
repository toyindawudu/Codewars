/*
Questions
Messi goals function

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions.
Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

Ex :

*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

  // create a variable to store goals for each of the leagues
  //
  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  
    // Create a variable for each of the leagues
    let laLiga = 0;
    let copaDelRey = 0;
    let championsLeague = 0;
    let result = 0;
    // Create a function to  add the sum of each league 
    
    laLiga = laLigaGoals;
    copaDelRey = copaDelReyGoals;
    championsLeague = championsLeagueGoals;
    
    result = laLiga + copaDelRey + championsLeague;
    
    return result;
  }
}

console.log(goals(23,12,8));
