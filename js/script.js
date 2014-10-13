/*  
	1. Addition 
	There are two different fields: #additionInput1 and #additionInput2. 
	We've already written the functionality for handling when the user 
	clicks on the button (called #additionButton). 
	Your job is to write code that takes the two fields, 
	and alerts the user what the sum is.
*/ 

function addition() {
	var num1 = Number(document.getElementById('additionInput1').value);
    var num2 = Number(document.getElementById('additionInput2').value);

    document.getElementById('additionButton').innerHTML = num1 + num2;
}

/* --------------------------------------------------------- */

/*  
	2. Vowel Counter 
	You have one input field: #vowelInput. 
	Like question 1, we've already written the functionality for handling 
	when the user clicks on the button (this time, called #vowelButton). 
	This time, you will replace the text within #vowelInput with the following string:

		"That sentence has X vowels in it."

	Vowels are the characters a, e, i, o, and u. If there is only 1 vowel in the sentence, 
	then the text should say "That sentence has 1 vowel in it." - 
	note the lack of plurality on the word vowel.
*/ 

function vowelCounter() {
	var vowelInput = document.getElementById('vowelInput').value.toLowerCase();
    var i;
    var x;
    var numVowels = 0;
    var vowelCheck = 'aeiou';

    for(i = 0; i < vowelInput.length; ++i) {
        for(x = 0; x < vowelCheck.length; ++x) {
            if(vowelInput.charAt(i) == vowelCheck.charAt(x)) {
                ++numVowels;
            }
        }
    }

    document.getElementById('vowelInput').value = 'That sentence has ' + numVowels + ' vowel(s) in it.';
}

/* --------------------------------------------------------- */


/*  
	3. Guess the Number

	This one's going to be a bit more challenging than the past two, so be careful.
	You will need to write up the functionality for a simple "guess the number" game.
	
	There are four parts to the game:
		1. A guess field (#numberGuess)
		2. A result paragraph (#numberResult)
		3. A submit button (#numberSubmit)
		4. A reset button (#numberReset)

	When a player hits the reset button, a random number between 1 and 100 should be generated.
	When a player hits the submit button, the system should identify their guess within the guessing field.
	If it's higher than the random number, print "Lower" to the result paragraph.
	If it's lower than the random number, print "Higher" to the result paragraph.
	If it's exactly the random number, signify that they've won.

	We've written the handlers for #numberSubmit and #numberReset, but it's your job to
	write the functionality. You may need to define a variable or two.

	For extra functionality, track the number of guesses the user has made, and print that as part of the result.
*/ 

var randNum = Math.floor((Math.random() * 100) + 1);
var result = document.getElementById('numberResult');

function submit() {
    var guess = Number(document.getElementById('numberGuess').value);

    console.log(randNum);
    console.log(guess);

    if(isNaN(guess)) {
        result.innerHTML = 'Guess a number please.';
    } else if(randNum < guess) {
        result.innerHTML = 'Lower.';
    } else if(randNum > guess) {
        result.innerHTML = 'Higher.';
    } else {
        result.innerHTML = 'You win!';
    }
}

function reset() {
    randNum = Math.floor((Math.random() * 100) + 1);

    result.innerHTML = 'Your result will go here.';
}


/* click handlers */
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('additionButton').addEventListener('click', addition);
	document.getElementById('vowelButton').addEventListener('click', vowelCounter);
	document.getElementById('numberSubmit').addEventListener('click', submit);
	document.getElementById('numberReset').addEventListener('click', reset);
});