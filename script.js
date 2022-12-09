function guessCheck() {
  //check all boxes have been filled in
  var fullName = document.forms.Quiz.FullName.value;
  var shortName = document.forms.Quiz.ShortName.value;
 //if either variable contains an empty string show an alert in the browser:
  if (fullName === "") {
    alert("Full name must be filled out");
    return false;
    } else if (shortName === "") {
         alert("What shall we call you must be filled out");
         return false; 
    } 
     else {
    return true;
   }  
}
