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
