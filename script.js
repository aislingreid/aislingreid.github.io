import { WORDS } from "./words.js";

function validateGuess() {
  //store the values from the form text fields into named variables
  var guess = document.forms.Guess1.G1.value;
 //if the variable contains an empty string show an alert in the browser:
  if (guess === "") {
    alert("Please enter your guess.");
    return false;
  //then check if the guess is the correct length
    } else if (guess.length != 5) {
         alert("Your guess must be 5 letters long");
         return false; 
    } 
     else {
    alert("A good guess!");
    return true;
   }  
}
