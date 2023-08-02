import Gameboard from './gameboard';
import Ship from './ship';

export default class Player {
    constructor(board = new Gameboard()) {
        this.board = board;
    }

    getBoard() {
        return this.board.getBoard();
    }

    placeShips(coordArr) {
        for (let i = 0; i < coordArr.length; i++) {
            this.board.placeShip(...coordArr[i]);
        }
    }

    static makeMove(row, col, enemyBoard) {
        enemyBoard.recieveAttack(row, col);
        if (enemyBoard.getPosition(row, col) instanceof Ship) {
            return true;
        }
        return false;
    }
}
