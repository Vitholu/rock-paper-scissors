const userClick = document.querySelectorAll('button');
const querySelectorDiv = document.querySelector('.display-results');

const pContainer = document.createElement('p');
querySelectorDiv.appendChild(pContainer);

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
			pContainer.textContent = 'Draw';
		}
		pContainer.textContent = 'You Won! ' + 'Computer choice was: ' + computer;
	}
	if (user === 'Paper' && computer != 'Scissor') {
		if (user === computer) {
			pContainer.textContent = 'Draw';
		}
		pContainer.textContent = 'You Won! ' + 'Computer choice was: ' + computer;
	}
	if (user === 'Scissor' && computer != 'Rock') {
		if (user === computer) {
			pContainer.textContent = 'Draw';
		}
		pContainer.textContent = 'You Won! ' + 'Computer choice was: ' + computer;
	} else {
		pContainer.textContent = 'You Lose! ' + 'Computer choice was: ' + computer;
	}
	return userChoice();
}

userChoice();
