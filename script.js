const userClick = document.querySelectorAll('button');

function userChoice(choice) {
	return choice;
}

function computerChoice() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	let choice;
	if (randomNumber != '') {
		if (randomNumber === 1) {
			return (choice = 'Rock');
		}
		if (randomNumber === 2) {
			return (choice = 'Paper');
		}
		if (randomNumber === 3) {
			return (choice = 'Scissor');
		}
	}
	return choice;
}

function rpsWinner(user, computer) {
	user = userChoice('Rock');
	computer = computerChoice();
	if (user === 'Rock' && computer != 'Paper') {
		if (user === computer) {
			return alert('Draw');
		}
		return alert('You Won! ' + 'Computer choice was: ' + computer);
	}
	if (user === 'Paper' && computer != 'Scissor') {
		if (user === computer) {
			return alert('Draw');
		}
		return alert('You Won! ' + 'Computer choice was: ' + computer);
	}
	if (user === 'Scissor' && computer != 'Rock') {
		if (user === computer) {
			return alert('Draw');
		}
		return alert('You Won! ' + 'Computer choice was: ' + computer);
	} else {
		return alert('You Lose! ' + 'Computer choice was: ' + computer);
	}

	return console.log('Thanks for playing');
}
