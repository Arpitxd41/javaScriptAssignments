function celeberate () {
    const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 50 * (timeLeft / duration);
  
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}


function finish() {
                             
}

const game = () => {

    // let choices = document.getElementsByClassName("choices");

// SCORE COUNTING
    let playerScoreVal = document.getElementById("playerScoreVal");
    let compScoreVal = document.getElementById("compScoreVal");
    let playerScore = document.getElementById("playerScoreVal").textContent;
    let compScore = document.getElementById("compScoreVal").textContent

    const playerChose = document.getElementById("playerChoice");
    const computerChose = document.getElementById("compChoice");    
    const winnerChose = document.getElementById("winChoice");
    
// GAMEPLAY
    const playGame = () => {
        const rockBtn = document.getElementById("r");
        const paperBtn = document.getElementById("p");
        const scissorBtn = document.getElementById("s");

// CHOICES OF PLAYER AND COMPUTER
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const compChoice = ["Rock", "Paper", "Scissor"]

// COMPUTER CHOICE : Presented when the player makes a choice
        playerOptions.forEach(option => {
            option.addEventListener("click", chose =()=>{
                let comp = compChoice[Math.floor(Math.random() * 3)];
                computerChose.innerText = comp;
                let cpu = computerChose.innerText;

// CHANGE : With each result to demonstrate that the move has been made
                let constant = "#";
                let chr = "ABCDEF1234567890"
                for (let i = 0; i < 6; i++) {
                    constant = constant + chr[Math.floor(Math.random() * 16)];                    
                }
                
                document.getElementsByClassName("result")[0].style.borderColor = constant;
                winnerChose.style.color = constant;

// USER MOVES
                if (option === rockBtn) {
                    playerChose.innerText = "Rock";
                    if (cpu === "Rock") {
                        winnerChose.innerText = "Tied";
                    }
                    if (cpu === "Paper") {
                        winnerChose.innerText = "You Lost !"
                        compScore++;
                        compScoreVal.textContent = compScore;                        
                    }
                    if (cpu === "Scissor") {
                        winnerChose.innerText = "You Won !"
                        playerScore++;
                        playerScoreVal.textContent = playerScore;
                    }
                    if (playerScore === 10 || compScore === 10) {   
                        celeberate();
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                }
                if (option === paperBtn) {
                    playerChose.innerText = "Paper";
                    if (cpu === "Paper") {
                        winnerChose.innerText = "Tied";
                    }
                    if (cpu === "Scissor") {
                        winnerChose.innerText = "You Lost !"
                        compScore++;
                        compScoreVal.textContent = compScore;
                    }
                    if (cpu === "Rock") {
                        winnerChose.innerText = "You Won !"
                        playerScore++;
                        playerScoreVal.textContent = playerScore;
                    }
                    if (playerScore === 10 || compScore === 10) {   
                        celeberate();
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                }
                if (option === scissorBtn) {
                    playerChose.innerText = "Scissor";
                    if (cpu === "Scissor") {
                        winnerChose.innerText = "Tied";
                    }
                    if (cpu === "Rock") {
                        winnerChose.innerText = "You Lost !"
                        compScore++;
                        compScoreVal.textContent = compScore;
                    }
                    if (cpu === "Paper") {
                        winnerChose.innerText = "You Won !"
                        playerScore++;
                        playerScoreVal.textContent = playerScore;
                    }
                    if (playerScore === 10 || compScore === 10) {   
                        celeberate();
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                }                
            })
        });
    }
    playGame();
}
game();