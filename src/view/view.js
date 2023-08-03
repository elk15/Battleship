import Gameboard from '../model/gameboard';

export default class View {
    static generateBoard(board, id) {
        document.querySelector(id).innerHTML = '';
        const arr = board.getBoard();
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr.length; col++) {
                const position = document.createElement('div');
                position.classList.add('position');
                position.dataset.row = row;
                position.dataset.col = col;
                document.querySelector(id).appendChild(position);
            }
        }
    }

    static generatePlayerBoard(board) {
        View.generateBoard(board, '#player-board');
    }

    static generateEnemyBoard(board) {
        View.generateBoard(board, '#enemy-board');
    }
}
