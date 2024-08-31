let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("Game is Draw");
  msg.innerHTML = "Match Draw🫠Choices Are Same";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user.innerHTML = userScore;
    console.log("You Win 😊");
    msg.innerHTML = `You Win 😊 Your Choice ${userChoice} beats Computer Choice ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    comp.innerHTML = computerScore;
    console.log("You Lose 😟");
    msg.innerHTML = `You Lost 😟 Computer Choice ${compChoice} beats Your Choice ${userChoice} `;

    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user Choice", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice Was Clicked ", userChoice);
    playGame(userChoice);
  });
});
