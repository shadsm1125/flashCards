var BasicFlashCard = require('./basicFlashCard');

var addFlashCard = function(){
	this.BasicFlashCard = [];
	this.BasicFlashCard = function(){
		this.BasicFlashCard.push(new flashcard());
	}
}

module.exports = addFlashCard;