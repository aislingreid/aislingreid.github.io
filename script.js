// Get the input field
var input = document.getElementById("Guess");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
// If the user presses the "Enter" key on the keyboard
if (event.key === "Enter") {
    // Trigger the button element with a click
    document.getElementById("btnSubmit").click();
}
});
    function Test() {
        var guess = document.getElementById('Guess').value.toLowerCase();
        var answer = "tiers"
        var x = 0
        for (var k = 1; k < 8; k++) {
            if (k == 6 && guess!= answer){
                document.getElementById("input-field").innerHTML = ("Sorry, you have lost. The answer was " + answer + ".");
                let btn = document.createElement("button");
                btn.innerHTML = "Play Again!";
                btn.style.borderRadius = "8px";
                document.getElementById("play-again").appendChild(btn);
                btn.onclick = function () {
                    window.location.reload();
                }
            }
        if (document.getElementById("G"+ k + "L1").textContent.length == 0){
            x = k;
            break;
        }
    }
    if (guess.length != 5) {
        alert("Your guess must be 5 letters long");
        return false;
    }
    for (var i = 0; i < 5; i++) {
    //loop through each box
        //if the character is in the word in the same position, colour it green on the game board and alphabet
        if (guess.charAt(i) === answer.charAt(i)) {
            letter = document.getElementById("G" + x + "L" + (i+1));
            letter.innerHTML = guess[i]
            letter.style.color="chartreuse";
            character = document.getElementById(guess[i]);
            character.style.color="lime";
        }
        //if the character is not in the word, colour it grey on the game board and alphabet
        else if (answer.includes(guess.charAt(i)) == false) {
            letter = document.getElementById("G" + x + "L" + (i+1));
            letter.innerHTML = guess[i]
            letter.style.color="DarkGrey";
            character = document.getElementById(guess[i]);
            character.style.color="DarkGrey";
        }
        else {
        //character is in word but in wrong position
        //if the number of times the character has appeared in the guess is equal to or less than the number in the answer, it should be yellow
        //if the number of times the character has appeared in the guess is more than the number in the answer, it should be grey
        //number of times letter is in the guess word
        var countg = 0
        for (var j = 0; j < i+1; j++) {
            if (guess[j] === guess[i]) {
                countg += 1;
            }
        };
        //number of times the letter is in the answer
        var counta = 0
        for (var j = 0; j < 5; j++) {
            if (answer[j] === guess[i]) {
                counta += 1;
            }
        };
        //number of times the letter is already in the correct place
        var countc = 0
        for (var j = 0; j < 5; j++) {
            if (guess.charAt(i) === guess.charAt(j) && guess.charAt(i) === answer.charAt(j)) {
            countc += 1;
            }
        };
         counta = counta - countc
        if (countg > counta) {
                letter = document.getElementById("G" + x + "L" + (i+1));
                letter.innerHTML = guess[i]
                letter.style.color="DarkGrey";
            }
        else {
                letter = document.getElementById("G" + x + "L" + (i+1));
                letter.innerHTML = guess[i]
                letter.style.color="#F9B400";
                character = document.getElementById(guess[i]);
                if (character.style.color != "lime") {
                    character.style.color="#F9B400";
                }

            }
        }
    }
    document.getElementById("Guess").value = '';
    if (guess == answer) {
        document.getElementById("input-field").innerHTML = ("Correct! The answer was " + answer + ".");
        let btn = document.createElement("button");
        btn.innerHTML = "Play Again!";
        btn.style.borderRadius = "8px";
        document.getElementById("play-again").appendChild(btn);
        btn.onclick = function () {
            window.location.reload();
        };
    }
}


