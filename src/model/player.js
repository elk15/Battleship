import Gameboard from './gameboard';
import Ship from './ship';

export default class Player {
    constructor() {
        this.board = new Gameboard();
    }

    getBoard() {
        return this.board;
    }

    clearBoard() {
        this.board.clearBoard();
    }

    placeShips(coordArr) {
        for (let i = 0; i < coordArr.length; i++) {
            this.board.placeShip(...coordArr[i]);
        }
    }

    placeShipsRandomly() {
        this.board.placeShipsRandomly();
    }

    makeMove(row, col, enemyBoard) {
        enemyBoard.recieveAttack(row, col);
        if (enemyBoard.getPosition(row, col) instanceof Ship) {
            return true;
        }
        return false;
    }

    getRemainingShips() {
        return this.board.getRemainingShips();
    }

    isGameOver() {
        return this.board.isGameOver();
    }
}
