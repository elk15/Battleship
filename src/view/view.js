import Gameboard from '../model/gameboard';
import Ship from '../model/ship';

export default class View {
    static generateBoard(id, board) {
        document.querySelector(id).innerHTML = '';
        const arrBoard = board.getBoard();
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.dataset.row = row;
                square.dataset.col = col;
                if (id === '#player-board' && arrBoard[row][col] !== '') {
                    square.classList.add('ship');
                } else {
                    square.classList.add('empty');
                }
                document.querySelector(id).appendChild(square);
            }
        }
    }

    static generatePlayerBoard(board) {
        View.generateBoard('#player-board', board);
    }

    static generateEnemyBoard(board) {
        View.generateBoard('#enemy-board', board);
    }

    static displayRemainingEnemyShips(amount) {
        document.querySelector('#enemy-caption .unsinked-ships').textContent = amount;
    }

    static displayRemainingPlayerShips(amount) {
        document.querySelector('#player-caption .unsinked-ships').textContent = amount;
    }

    static findSquare(row, col, id) {
        let result;
        document.querySelectorAll(`${id} .square`).forEach((square) => {
            if (square.dataset.row === row && square.dataset.col === col) {
                result = square;
            }
        });
        return result;
    }

    static displayPlayerMoveResult(row, col, isSuccess) {
        const square = this.findSquare(row, col, '#enemy-board');
        if (isSuccess) {
            square.classList.remove('empty');
            square.classList.add('ship-hit');
            square.innerHTML = '<span>X</span>';
        } else {
            square.innerHTML = '<span>*</span>';
            square.classList.remove('empty');
            square.classList.add('miss');
        }
    }

    static displayEnemyMoveResult(row, col, isSuccess) {
        const square = this.findSquare(row.toString(), col.toString(), '#player-board');
        if (isSuccess) {
            square.classList.remove('ship');
            square.classList.add('ship-hit');
            square.innerHTML = '<span>X</span>';
        } else {
            square.innerHTML = '<span>*</span>';
            square.classList.remove('empty');
            square.classList.add('miss');
        }
    }

    static addRedBlinking() {
        const caption = document.querySelector('#game-caption');
        caption.classList.remove('green-blink');
        caption.classList.add('red-blink');
    }

    static addGreenBlinking() {
        const caption = document.querySelector('#game-caption');
        caption.classList.remove('red-blink');
        caption.classList.add('green-blink');
    }

    static displayPlayerTurn() {
        View.addGreenBlinking();
        document.querySelector('#game-caption').textContent = 'Your Turn!';
    }

    static displayEnemyTurn() {
        View.addRedBlinking();
        document.querySelector('#game-caption').textContent = 'Enemy\'s Turn!';
    }

    static displayPlayerWin() {
        View.addGreenBlinking();
        document.querySelector('#game-caption').textContent = 'Your Won!';
    }

    static displayEnemyWin() {
        View.addRedBlinking();
        document.querySelector('#game-caption').textContent = 'You Lost...';
    }
}
