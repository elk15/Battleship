import Gameboard from '../model/gameboard';
import Ship from '../model/ship';

export default class View {
    static generateBoard(id, board = null) {
        document.querySelector(id).innerHTML = '';
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.dataset.row = row;
                square.dataset.col = col;
                if (board && board.getBoard()[row][col] !== '') {
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

    static hideOverlay() {
        document.querySelector('#overlay').classList.add('hidden');
    }

    static showOverlay() {
        document.querySelector('#overlay').classList.remove('hidden');
    }

    static showPlayAgain(winner) {
        document.querySelector('#play-again').classList.remove('hidden');
        const text = winner === 'p' ? 'You won :)' : 'You lost :(';
        document.querySelector('#play-again #result-msg').textContent = text;
    }

    static hidePlayAgain() {
        document.querySelector('#play-again').classList.add('hidden');
    }

    static placeShip(length, row, col, orientation) {
        let square;
        for (let i = 0; i < length; i++) {
            if (orientation === 'h') {
                square = this.findSquare(row, String(Number(col) + i), '#place-ships-board');
            } else {
                square = this.findSquare(String(Number(row) + i), col, '#place-ships-board');
            }
            square.classList.add('ship');
            square.classList.remove('empty');
        }
    }

    static changeNextShipMsg(length) {
        const msg = length === undefined ? 'All ships placed!'
            : `Place your ${length} square long ship`;
        document.querySelector('#ship-desc').textContent = msg;
    }

    static hidePlaceShips() {
        document.querySelector('#place-ships').classList.add('hidden');
    }

    static showPlaceShips() {
        document.querySelector('#place-ships').classList.remove('hidden');
    }

    static hideMainContainer() {
        document.querySelector('.main-container').classList.add('hidden');
    }

    static showMainContainer() {
        document.querySelector('.main-container').classList.remove('hidden');
    }
}
