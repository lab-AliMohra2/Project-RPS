const PlayGame = () => {

  let playerScore = 0;
  let computerScore = 0;
  let count = 3;
  const countPlay = document.querySelector(".count");
  countPlay.innerText = `The number of games left is : ${count}`;


  const Play = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const rockBtnC = document.querySelector(".rockC");
    const paperBtnC = document.querySelector(".paperC");
    const scissorBtnC = document.querySelector(".scissorC");
    const arrBtnP = [rockBtn, paperBtn, scissorBtn];
    const arrBtnC = [rockBtnC, paperBtnC, scissorBtnC];
    const result = document.querySelector(".WL");
    const pScore = document.querySelector(".resp");
    const cScore = document.querySelector(".resc");
    const play = document.querySelector(".play");
    const containerResult = document.querySelector(".result");
    const Restart = document.querySelector(".restart");
    const over = document.querySelector(".game-over");

    arrBtnP.forEach((btn) => {
      btn.addEventListener("click", function () {
        play.style.display = "block";
        Restart.style.display = "block";
        const countPlay = document.querySelector(".count");
        count--;
        countPlay.innerText = `The number of games left is : ${count}`;
        const computerChoice = arrBtnC[Math.floor(Math.random() * 3)];

        let choice1 = btn.value;
        let choice2 = computerChoice.value;
        Select(arrBtnP, btn);
        Select(arrBtnC, computerChoice);
        containerResult.style.display = "flex";

        if (choice1 === choice2) {
          result.textContent = "Tie";
          computerChoice.style.backgroundColor = "#00000050";
          btn.style.backgroundColor = "#00000050";
        } else if (choice1 == "rock") {
          if (choice2 == "paper") {
            result.textContent = "player Loss Computer Is Win";
            computerScore++;
            cScore.textContent = computerScore;
            computerChoice.style.backgroundColor = "Green";
            btn.style.backgroundColor = "red";
          } else {
            result.textContent = "Player Is Win";
            playerScore++;
            pScore.textContent = playerScore;
            btn.style.backgroundColor = "Green";
            computerChoice.style.backgroundColor = "Red";
          }
        } else if (choice1 == "scissor") {
          if (choice2 == "rock") {
            result.textContent = "player Loss Computer Is Win";
            computerScore++;
            cScore.textContent = computerScore;
            computerChoice.style.backgroundColor = "green";
            btn.style.backgroundColor = "red";
          } else {
            result.textContent = "Player Is Win";
            playerScore++;
            pScore.textContent = playerScore;
            btn.style.backgroundColor = "green";
            computerChoice.style.backgroundColor = "red";
          }
        } else if (choice1 == "paper") {
          if (choice2 == "scissor") {
            result.textContent = "player Loss Computer Is Win";
            computerScore++;
            cScore.textContent = computerScore;
            computerChoice.style.backgroundColor = "green";
            btn.style.backgroundColor = "red";
          } else {
            result.textContent = "Player Is Win";
            playerScore++;
            pScore.textContent = playerScore;
            btn.style.backgroundColor = "green";
            computerChoice.style.backgroundColor = "red";
          }
        }

        if (count == 0) {
          GameOver(Restart, over, play, playerScore, computerScore);
        }

        play.addEventListener("click", function () {
          btn.style.backgroundColor = "#00000000";
          computerChoice.style.backgroundColor = "#00000000";
          NoSelect(arrBtnC);
          NoSelect(arrBtnP);
          containerResult.style.display = "none";
        });

        Restart.addEventListener("click", function () {
          window.location.reload();
        });
      });
    });
  };

  Play();
};

const Select = (arrBtn, choice) => {
  arrBtn.forEach((btn) => {
    if (btn !== choice) {
      btn.style.display = "none";
    }
  });
  choice.style.width = "150px";
  choice.disabled = true;
};

const NoSelect = (arrBtn) => {
  arrBtn.forEach((btn) => {
    btn.style.display = "block";
    btn.style.width = "120px";
    btn.disabled = false;
  });
};

const GameOver = (restart, over, play, pScore, cScore) => {
  restart.textContent = "Play Again";
  restart.style.backgroundColor = "red";
  play.disabled = true;
  play.style.cursor = "default";
  over.style.display = "block";
  if (pScore > cScore) {
    over.innerHTML = "<br>Player WIN The Game";
  } else if (pScore < cScore) {
    over.innerHTML = "!!Game Over <br> Player LOSS The Game";
    over.style.color = "red";
  } else {
    over.innerHTML = "Tie Try Again";
    over.style.color = "#555";
  }
};
PlayGame();
