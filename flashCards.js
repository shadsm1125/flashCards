var BasicFlashCard = require('./basicFlashCard'); 
var clozeFlashCard = require('./clozeFlashCard'); 
var inquirer = require('inquirer'); 
var fs = require('fs'); 



function flashcard(){
	inquirer.prompt([

		{
			type: "confirm",
			message: "Are you ready for some flashcards?",
			name: "confirmation"
		},
		
		{
			type: "checkbox",
			message: "What is your experience level?  ",
            choices: ("Beginner", "Intermediate", "Genius"), 
			name: "boxofChecks"
		},
		
		
	]).then(function (user) {
		

		// If we log that user as a JSON, we can see how it looks.
		console.log(JSON.stringify(user, null, 2));
		confirmation = user.confirmation;
		boxofChecks = user.boxofChecks;
		

	});
}