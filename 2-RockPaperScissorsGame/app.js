const startGameBtn = document.getElementById("start-game-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const chooseList = ["rock","paper","scissors"];

const playerRockBtn = document.getElementById("player-rock");
const playerPaperBtn = document.getElementById("player-paper");
const playerScissorsBtn = document.getElementById("player-scissors");

const computerRockBtn = document.getElementById("computer-rock");
const computerPaperBtn = document.getElementById("computer-paper");
const computerScissorsBtn = document.getElementById("computer-scissors");

const playerScoreBoard = document.getElementById("player-score-board");
const computerScoreBoard = document.getElementById("computer-score-board");
const winnerText = document.getElementById("winner-text");

let playerScore = 0;
let computerScore = 0;

startGameBtn.addEventListener("click" , () => {
    document.querySelector("#start-game-area").classList.add("hidden");
    setTimeout(() => {
        document.querySelector("#start-game-area").classList.add("d-none");
        document.querySelector("#game-area").classList.remove("d-none");
        setTimeout(() => { document.querySelector("#game-area").classList.remove("hidden"); }, 100);
    }, 200);
});

playAgainBtn.addEventListener("click" , () => {
    window.location.reload();
});

playerRockBtn.addEventListener("click" , () => { playerResponse("rock") });
playerPaperBtn.addEventListener("click" , () => { playerResponse("paper") });
playerScissorsBtn.addEventListener("click" , () => { playerResponse("scissors") });

//Score
const scoreControl = (pResponse , cResponse) => {
    console.log(pResponse , cResponse);
    if (pResponse == cResponse) {
        winnerText.style.display = "block";
        winnerText.innerText = "tie";
    }

    if (pResponse == "rock" && cResponse == "paper") {
        computerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : COMPUTER";
    }

    if (pResponse == "rock" && cResponse == "scissors") {
        playerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : PLAYER";
    }

    if (pResponse == "paper" && cResponse == "rock") {
        playerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : PLAYER";
    }

    if (pResponse == "paper" && cResponse == "scissors") {
        computerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : COMPUTER";
    }

    if (pResponse == "scissors" && cResponse == "rock") {
        computerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : COMPUTER";
    }

    if (pResponse == "scissors" && cResponse == "paper") {
        playerScore++;
        winnerText.style.display = "block";
        winnerText.innerText = "WINNER : PLAYER";
    }

    scoreBoardDisplay();
};

const scoreMaxControl = () => {
    if (playerScore == 5) {
        document.querySelector(".score-winner-text").innerText = "Congratulations Winner Player";
        document.querySelector("#game-area").classList.add("hidden");
        setTimeout(() => {
            document.querySelector("#game-area").classList.add("d-none");
            document.querySelector("#score-area").classList.remove("d-none");
            setTimeout(() => { document.querySelector("#score-area").classList.remove("hidden"); }, 100);
        }, 200);
    }

    if (computerScore == 5) {
        document.querySelector(".score-winner-text").innerText = "Congratulations Winner Computer";
        document.querySelector("#game-area").classList.add("hidden");
        setTimeout(() => {
            document.querySelector("#game-area").classList.add("d-none");
            document.querySelector("#score-area").classList.remove("d-none");
            setTimeout(() => { document.querySelector("#score-area").classList.remove("hidden"); }, 100);
        }, 200);
    }
};

const scoreBoardDisplay = () => {
    playerScoreBoard.innerText = playerScore;
    computerScoreBoard.innerText = computerScore;
}
//Score

//Player
const playerResponse = (response) => {
    playerBtnActive(response);
    playerbtnDisabled();

    setTimeout(() => {
        const cResponse = computerResponse();
        computerBtnActive(cResponse);
        scoreControl(response, cResponse);
        setTimeout(() => {
            winnerText.style.display = "none";
            winnerText.innerText = "";
            scoreMaxControl();
            playerbtnUnDisabled();
            playerBtnUnActive(response);
            computerBtnUnActive(cResponse);
        }, 1000);
        
    }, 800);
};

const playerBtnActive = (response) => {
    switch (response) {
        case "rock":
            playerRockBtn.classList.add("active");
        break;

        case "paper":
            playerPaperBtn.classList.add("active");
        break;

        case "scissors":
            playerScissorsBtn.classList.add("active");
        break;
    }
};

const playerBtnUnActive = (response) => {
    switch (response) {
        case "rock":
            playerRockBtn.classList.remove("active");
        break;

        case "paper":
            playerPaperBtn.classList.remove("active");
        break;

        case "scissors":
            playerScissorsBtn.classList.remove("active");
        break;
    }
};

const playerbtnDisabled = () => {
    const playerBtnList = document.getElementById("player-buttons").children;
    for(let button of playerBtnList) {
        button.classList.add("disabled");
    }
}

const playerbtnUnDisabled = () => {
    const playerBtnList = document.getElementById("player-buttons").children;
    for(let button of playerBtnList) {
        button.classList.remove("disabled");
    }
}
//Player

// Computer
const computerResponse = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return chooseList[randomIndex];
};

const computerBtnActive = (response) => {
    switch (response) {
        case "rock":
            computerRockBtn.classList.add("active");
        break;

        case "paper":
            computerPaperBtn.classList.add("active");
        break;

        case "scissors":
            computerScissorsBtn.classList.add("active");
        break;
    }
};

const computerBtnUnActive = (response) => {
    switch (response) {
        case "rock":
            computerRockBtn.classList.remove("active");
        break;

        case "paper":
            computerPaperBtn.classList.remove("active");
        break;

        case "scissors":
            computerScissorsBtn.classList.remove("active");
        break;
    }
};
// Computer