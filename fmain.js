let userScore = 0;
let computerScore = 0;
let userhand;
let computerHand;
let roundResult;

const User_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const ROCK = document.getElementById("rock");
const SCISSORS = document.getElementById("scissors");
const PAPER = document.getElementById("paper");



const result = document.getElementById("result");
const Score_Board = document.getElementById("score-board");



ROCK.addEventListener('click', function () {
    computerChoice();
    userhand = "rock";
    calculateResult();
    changeColor();
});
SCISSORS.addEventListener('click', function () {
    computerChoice();
    userhand = "scissors";
    calculateResult();
    changeColor();
});
PAPER.addEventListener('click', function () {
    computerChoice();
    userhand = "paper";
    calculateResult();
    changeColor();
});

function computerChoice() {
    let random_Number = Math.floor(Math.random() * 3);
    if (random_Number == 0) {
        computerHand = "rock"
    } else if (random_Number == 1) {
        computerHand = "paper"
    } else if (random_Number == 2) {
        computerHand = "scissors"
    }
}

function calculateResult() {
    if (userhand == "rock" && computerHand == "scissors" ||
        userhand == "paper" && computerHand == "rock" ||
        userhand == "scissors" && computerHand == "paper"
    ) {
        userScore++;
        User_OUTPUT.innerHTML = userScore;
        result.innerHTML = userhand + " <sup>(User) </sup> Beats " + computerHand + " <sup>(Computer) </sup>,  You Win! ";
        roundResult = "You Win";
    }
    
    else if (computerHand == "rock" && userhand == "scissors" ||
        computerHand == "paper" && userhand == "rock" ||
        computerHand == "scissors" && userhand == "paper"
    ) {
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore;
        result.innerHTML = computerHand + " <sup>(Computer) </sup> Beats, " + userhand + " <sup>(User) </sup>  You Lose!  ";
        roundResult = "You Lose";
    } else {
        result.innerHTML = "it's a Drow! "
        roundResult = "Draw";
    }
}

function changeColor() {
    if (roundResult == "You Win") {
        Score_Board.style.backgroundColor = "#4caf50"
    } else if (roundResult == "You Lose") {
        Score_Board.style.backgroundColor = "#f44336"
    } else if (roundResult == "Draw") {
        Score_Board.style.backgroundColor = "#2196f3"
    }

    checkMatchEnd();
}

function checkMatchEnd() {
    const WIN_SCORE = 5;

    if (userScore === WIN_SCORE || computerScore === WIN_SCORE) {
        const userWon = userScore === WIN_SCORE;

        showModal({
            type: userWon ? "success" : "gameover",
            icon: userWon ? "🏆" : "🤖",
            title: userWon ? "You won the match!" : "Computer wins the match",
            message: `Final score: ${userScore} : ${computerScore}`,
            buttonText: "Play again",
            onClose: resetMatch
        });
    }
}

function resetMatch() {
    userScore = 0;
    computerScore = 0;
    User_OUTPUT.innerHTML = 0;
    COMPUTER_OUTPUT.innerHTML = 0;
    result.innerHTML = "First to 5 wins the match";
    Score_Board.style.backgroundColor = "";
}
 