// script.js
document.addEventListener('DOMContentLoaded', (event) => { 
document.getElementById('submit').addEventListener('click', function() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    if (player1 && player2) {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        startGame(player1, player2);
    }
});
	});

function startGame(player1, player2) {
    let currentPlayer = player1;
    let currentSymbol = 'X';
    const cells = document.querySelectorAll('.cell');
    const turnMessage = document.querySelector('#turnMessage');
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
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
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
