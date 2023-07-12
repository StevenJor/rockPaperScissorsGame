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
        return "You Win! Paper beats Rock.";
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

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");
const userResultsDiv = document.getElementById("userResults");
const computerResultsDiv = document.getElementById("computerResults");
const resultsDiv = document.getElementById("results");
let myPoints = 0;
let computerPoints = 0;

function onCLickButton(tool) {
    userResultsDiv.textContent = "";
    computerResultsDiv.textContent = "";
    resultsDiv.textContent = "";
    let p1 = document.createElement("p");
    p1.style.color = "green";
    p1.style.fontWeight = "600";
    p1.textContent = `You chose ${tool}.`;
    userResultsDiv.appendChild(p1);
    let p2 = document.createElement("p");
    p2.style.color = "green";
    p2.style.fontWeight = "600";
    let computerChoice = getComputerChoice();
    p2.textContent = `Computer chose ${computerChoice}`;
    computerResultsDiv.appendChild(p2);

    
    let winOrLose = playRound(tool, computerChoice);
    let p3 = document.createElement("p");
    p3.style.color = "green";
    p3.style.fontWeight = "600";
    p3.textContent = winOrLose;
    
    resultsDiv.appendChild(p3);
    if (winOrLose.slice(4, 7) === "Win") {
        myPoints++;
    }
    else if (winOrLose.slice(4, 8) === "Lose") {
        computerPoints++;
    }

    let p4 = document.createElement("p");
    p4.style.color = "green";
    p4.style.fontWeight = "600";
    p4.textContent = `You have ${myPoints} point/s.`;
    userResultsDiv.appendChild(p4);
    let p5 = document.createElement("p");
    p5.style.color = "green";
    p5.style.fontWeight = "600";
    p5.textContent = `Computer has ${computerPoints} point/s.`;
    computerResultsDiv.appendChild(p5);
}
rockBtn.addEventListener("click", () => {
    onCLickButton("Rock");
    sayWinner();
});
paperBtn.addEventListener("click", () => {
    onCLickButton("Paper");
    sayWinner();
});
scissorsBtn.addEventListener("click", () => {
    onCLickButton("Scissors");
    sayWinner();
});
resetBtn.addEventListener("click", () => {
    userResultsDiv.textContent = "";
    computerResultsDiv.textContent = "";
    resultsDiv.textContent = "";
    myPoints = 0;
    computerPoints = 0;
});
function sayWinner() {
    if (myPoints === 5) {
        let h31 = document.createElement("h3");
        h31.textContent = "You are the winner!";
        resultsDiv.appendChild(h31)
        myPoints = 0;
        computerPoints = 0;
    }
    else if (computerPoints === 5) {
        let h32 = document.createElement("h3");
        h32.textContent = "The computer is the winner!";
        resultsDiv.appendChild(h32);
        myPoints = 0;
        computerPoints = 0;
    }
}