function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let option = Math.floor(Math.random() * 3);
    return options[option];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors.";
    }
    else {
        return "It's a tie!";
    }
}

function game() {
    let computerPoints = 0;
    let myPoints = 0;
    for (let i = 0; i < 5; i++) {
        let myChoice = prompt("Enter your choice");
        let computerChoice = getComputerChoice();
        console.log(`You chose ${myChoice}.`);
        console.log(`The computer chose ${computerChoice}.`);
        let result = playRound(myChoice, computerChoice);
        console.log(result);
        if (result.slice(4, 7) === "Win") {
            myPoints++;
        }
        else if (result.slice(4, 8) === "Lose") {
            computerPoints++;
        }
    }
    if (myPoints > computerPoints) {
        console.log(`You have ${myPoints} point/s.`);
        console.log(`The computer has ${computerPoints} point/s.`);
        console.log(`You are the winner!`);
    }
    else if (myPoints < computerPoints) {
        console.log(`You have ${myPoints} point/s.`);
        console.log(`The computer has ${computerPoints} point/s.`);
        console.log(`The computer is the winner!`);
    }
    else {
        console.log(`You have ${myPoints} point/s.`);
        console.log(`The computer has ${computerPoints} point/s.`);
        console.log(`There is no winner!`);
    }
}

game();