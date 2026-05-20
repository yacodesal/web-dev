let winText = document.querySelector("#end-of-game p");
let squareArr = document.querySelectorAll("div.ttt-square");
let EOGDiv = document.getElementById("end-of-game");
let currentPlayer = "X";

for (const element of squareArr) {
  element.addEventListener ("click", (event)=> markSymbol(event));
}


function markSymbol(event) {
  let clickedSquare = event.target;
  
  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
    
    if (checkWinner() == false) checkDraw();
    changePlayer();
  }
}

function checkWinner() {
  let isGameOver = false;
  
  //Check for 3 in a row
  for (let i = 0; i <3; i++) {
     if (squareArr[3*i].innerText == currentPlayer 
      && squareArr[3*i+1].innerText == currentPlayer 
      && squareArr[3*i+2].innerText == currentPlayer) isGameOver = true;
  }
  // Check for 3 in a column
  for (let i = 0; i <3; i++) {
     if (squareArr[i].innerText == currentPlayer 
      && squareArr[i+3].innerText == currentPlayer 
      && squareArr[i+6].innerText == currentPlayer) isGameOver = true;
  }
    
  //Check for 3 in a diag
  if (squareArr[0].innerText == currentPlayer 
      && squareArr[4].innerText == currentPlayer 
      && squareArr[8].innerText == currentPlayer) isGameOver = true;
  else if (squareArr[2].innerText == currentPlayer 
           && squareArr[4].innerText == currentPlayer 
           && squareArr[6].innerText == currentPlayer) isGameOver = true;
  
// If game is over, display end-of-game div
  if(isGameOver) showWinner();
  return isGameOver;
}

function checkDraw() {
  let isDraw = true;
  
  for (const elem of squareArr) {
    if(elem.innerText == "") isDraw = false;
  }
  
  if (isDraw) {
    showDraw();
  }
}

  function showWinner() {
     EOGDiv.style.display = "block";
     winText.innerText = "🥳" + currentPlayer + " player Wins!🥳"
  }

function showDraw() {
     EOGDiv.style.display = "block";
     winText.innerText = "No Winner. Play Rock Paper Scissors.🤷‍♀"
}
  

function changePlayer() {
  if (currentPlayer == "X") currentPlayer = "O"; 
  else currentPlayer = "X";
}
// currentPlayer = ((currentPlayer =="X") ? "O" : "X") is the most efficient method, and is a turnery

function resetGame() {
//Hide the end-of-game div
  EOGDiv.style.display = "none";
  
//Clear the board
  for (const elem of squareArr) {
    elem.innerText = "";
  }
} 
