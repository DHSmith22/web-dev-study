let boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';
let userTurn = document.querySelector('.userTurn')
userTurn.innerText = `It's ${currentPlayer}'s Turn!`;
let activeGame = true;
const winMessage = userTurn;
const restartButton = document.querySelector('.restartButton');

const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (!activeGame) return;
        let boxText = box.querySelector('h1');

        
        if (boxText.textContent === "") {
            boxText.textContent = currentPlayer;
            
            if (checkWin()) {
                winMessage.textContent = `${currentPlayer} Wins!`;
                restartButton.style.display = 'block';
                activeGame = false;
            } else if (isDraw()) {
                winMessage.textContent = "It's a Draw";
                restartButton.style.display = 'block';
                activeGame = false;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch turns
                winMessage.textContent = `It's ${currentPlayer}'s Turn!`;
            }
        }
    });
});
function checkWin() {
    return winConditions.some(condition => {
        let [a, b, c] = condition;
        let h1A = boxes[a].querySelector('h1').textContent;
        let h1B = boxes[b].querySelector('h1').textContent;
        let h1C = boxes[c].querySelector('h1').textContent;
        
        return h1A !== "" && h1A === h1B && h1B === h1C; // All 3 must match
    });
}
function isDraw() {
    return [...boxes].every(box => box.querySelector('h1').textContent !== "");
}
restartButton.addEventListener('click', () => {
    boxes.forEach(box => box.querySelector('h1').textContent = ""); // Clear board
    currentPlayer = "X"; // Reset player start
    activeGame = true;
    winMessage.textContent = `It's ${currentPlayer}'s Turn!`;
    restartButton.style.display = 'none';
});