
document.getElementById('submit').addEventListener('click', function() {
    const player1 = document.getElementById('player-1').value;
    const player2 = document.getElementById('player-2').value;
    if (player-1 && player-2) {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        startGame(player-1, player-2);
    }
});

function startGame(player-1, player-2) {
    let currentPlayer = player-1;
    let currentSymbol = 'X';
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const turnMessage = document.getElementById('turnMessage');
    turnMessage.textContent = `${currentPlayer}, you're up!`;

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            if (cell.textContent === '') {
                cell.textContent = currentSymbol;
                if (checkWin(currentSymbol)) {
                    turnMessage.textContent = `${currentPlayer} congratulations you won!`;
                    endGame();
                } else if (isDraw()) {
                    turnMessage.textContent = `It's a draw!`;
                    endGame();
                } else {
                    currentPlayer = currentPlayer === player-1 ? player-2 : player-1;
                    currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
                    turnMessage.textContent = `${currentPlayer}, you're up!`;
                }
            }
        });
    });
}

function checkWin(symbol) {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return document.getElementById(index.toString()).textContent === symbol;
        });
    });
}

function isDraw() {
    const cells = document.querySelectorAll('.cell');
    return Array.from(cells).every(cell => {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
}

function endGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}
