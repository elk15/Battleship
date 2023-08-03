import Gameboard from '../model/gameboard';
import Ship from '../model/ship';

export default class View {
    static generateBoard(id) {
        document.querySelector(id).innerHTML = '';
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.dataset.row = row;
                square.dataset.col = col;
                square.classList.add('empty');
                document.querySelector(id).appendChild(square);
            }
        }
    }

    static generatePlayerBoard(board) {
        View.generateBoard('#player-board');
    }

    static generateEnemyBoard(board) {
        View.generateBoard('#enemy-board');
    }
}
