# rock-paper-scissors

Simple rock paper scissors game made with JS, HTML, and CSS.

Problem Solving Phase:

- Understand the problem: Create a very simple rock paper scissors game, without UI that will be played using the browser console.

- Plan:

  - Does your program have a user interface? No.
  - What inputs will your program have? The user will enter the data from the console.
  - What’s the desired output? An alert with the following message: "You Won!" if they win the RPS round against a computer or "You Lost!" if they lose against the computer.

- Pseudocode:

  - When the user inputs rock paper or scissor
  - Store the value in a variable (let's call it: userChoice)
  - Then randomly chose one of the three options (Rock || Paper || Scissor) and store it in another variable (let's call it: computerChoice)
  - Compare the value of userChoice against computerChoice using RPS game logic

  * RPS Game Logic:
    - Paper > Rock
    - Rock > Scissor
    - Scissor > Paper
    - Paper === Paper
    - Rock === Rock
    - Scissor === Scissor
