import Ship from './ship';

export default class Gameboard {
    constructor() {
        this.board = [
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
        ];

        this.ships = [];
    }

    getBoard() {
        return this.board;
    }

    placeShip(length, row, col, orientation) {
        if (!(this.board[row][col] instanceof Ship)) {
            const newShip = new Ship(length);
            this.ships.push(newShip);
            this.board[row][col] = newShip;
            if (orientation === 'h') {
                for (let i = 1; i < length; i++) {
                    this.board[row][col + i] = newShip;
                }
            } else {
                for (let i = 1; i < length; i++) {
                    this.board[row + i][col] = newShip;
                }
            }
        }
    }

    getPosition(row, col) {
        return this.board[row][col];
    }

    recieveAttack(row, col) {
        if (this.board[row][col] instanceof Ship) {
            if (!this.board[row][col].isSunk()) {
                this.board[row][col].hit();
            }
        } else if (this.board[row][col] === '') {
            this.board[row][col] = 'missed';
        }
    }

    isGameOver() {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk()) {
                return true;
            }
        }
        return false;
    }
}
