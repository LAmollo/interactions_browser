//You will create a simple guessing game. Using window methods, 
//you will give and receive information from the user in order to 
//direct them toward the correct answer in a limited number of guesses.


//Create a simple guessing game that pushes users toward the correct 
//answer in some iterative way. The game does not need to be practical or complicated.
//Use window object methods to gather input from the user and display information to the user.
//Use DOM manipulation to give a visual indication of the game's progress in some way.


// Generate a random number between 1 and 75
//const randomNumber = Math.floor(Math.random() * 75) + 1;
//let guesses = 0;

//document.getElementById('submitGuess').addEventListener('click', checkGuess);

//function checkGuess() {
    //const guess = parseInt(document.getElementById('guessInput').value);
    //const feedback = document.getElementById('feedback');

    //if (isNaN(guess) || guess < 1 || guess > 75) {
        //feedback.textContent = 'Please enter a valid number between 1 and 75.';
        //return;
    //}

    //guesses++;//Guesses called by participant

    //if (guess === randomNumber) {
        //feedback.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${guesses} guesses.`;
    //} else if (guess < randomNumber) {
        //feedback.textContent = 'Too low! Try again.';
    //} else {
        //feedback.textContent = 'Too high! Try again.';
   // }

    // Clear the input field for the next guess
    //document.getElementById('guessInput').value = '';
//}

// browser module

const randomNumber = Math.floor(Math.random() * 75) + 1;
let guesses = 0;

while (true) {
    const guess = prompt("Guess a number between 1 and 75:");

    if (guess === null) {
        // User clicked cancel
        alert("It's over. You gave up.");
        break;
    }

    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 75) {
        alert("Please enter a valid number between 1 and 75.");
        continue;
    }

    guesses++;

    if (parsedGuess === randomNumber) {
        alert(`Congratulations! You guessed the correct number ${randomNumber} in ${guesses} guesses.`);
        break;
    } else if (parsedGuess < randomNumber) {
        alert('Too low! Try again.');
    } else {
        alert('Too high! Try again.');
    }
}
