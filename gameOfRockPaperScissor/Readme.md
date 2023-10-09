# Rock Paper Scissor: A single player game with the Computer

### What I am creating ?
*A classic rock-paper-scissor game. To beplayed with the CPU. We will have three options to choose from, rock, paer and scissor. Whatever move we make the CPU will immidiately select a random option of the three immidiately and the winner or the looser will be declared at the same time for  each round, once the CPU and the user had made the move. The final winner will be decided out of the 10 such moves and will be declared so. After the 10 rounds the game will auto matically reset. Leaving the scores of the user and the CPU to 0.*

> I applied JavaScript for the game entirely CSS is also applied via javascript for the most part by grabbing the elements using `querySelector` and `getElementBy` properties. `loops` are used for the random choices being made inside the function. `addEventListeners` for actions.

--- 

- Function that runs the three choices that the user has from where the user is going to select one option. `playGame()` function from where the choices of the user with slection and the choice of the computer randomly made is functioned

- Random choice made by the CPU, looping through the options one out of the three is selected at random and the choice is made for the computer while the user is making the choice by direct selection inside the function `playGame()`

- The logic to compare the user choice and the CPU made random choice is there inside the main function. The winner or loser is decided by the classic rule of the game which are predefined in the code. Rocks are covered by Paper, Paper is cut by the Scissor, Scissor is broken by the Rock. So the Rock beats Scissor, Scissor beats Paper, Paper beats Rock and so the two choices made by the user and the CPU are compared.

- Declaring the output of the winner as CPU or the USER after the comparison of the two selections. Predefined rules clear which one is the winner for each move and the choices are reset once the winner and looser is decided for the another choice to be made and this goes on for the next 10 rounds and after that the game resets.

- Keeping the count as we get the win/lose declaration in each round sets the score of the user and the computer by +1 for each win and whoever reaches the score 10 wins and the game entirely resets. For the user to re-play the game in which the game is at a fresh start.

---
