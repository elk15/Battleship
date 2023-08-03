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
}
