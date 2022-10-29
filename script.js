const userClick = document.querySelectorAll('button');

function userChoice() {
	userClick.forEach((e) => {
		e.addEventListener('click', (e) => {
			return rpsWinner(e);
		});
	});
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
	computer = computerChoice();
	if (user === 'Rock' && computer != 'Paper') {
		if (user === computer) {
			alert('Draw');
		}
		alert('You Won! ' + 'Computer choice was: ' + computer);
	}
	if (user === 'Paper' && computer != 'Scissor') {
		if (user === computer) {
			alert('Draw');
		}
		alert('You Won! ' + 'Computer choice was: ' + computer);
	}
	if (user === 'Scissor' && computer != 'Rock') {
		if (user === computer) {
			alert('Draw');
		}
		alert('You Won! ' + 'Computer choice was: ' + computer);
	} else {
		alert('You Lose! ' + 'Computer choice was: ' + computer);
	}
	return userChoice();
}

userChoice();
