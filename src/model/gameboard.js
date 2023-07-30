import Ship from './ship';

export default class Gameboard {
    constructor() {
        this.board = [['', '', '', '', '', '', '', '', '', ''],
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

    placeShip(length, x, y, orientation) {
        if (!(this.board[x][y] instanceof Ship)) {
            const newShip = new Ship(length);
            this.ships.push(newShip);
            this.board[x][y] = newShip;
            if (orientation === 'h') {
                for (let i = 1; i < length; i++) {
                    this.board[x + i][y] = newShip;
                }
            } else {
                for (let i = 1; i < length; i++) {
                    this.board[x][y + i] = newShip;
                }
            }
        }
    }

    getPosition(x, y) {
        return this.board[x][y];
    }

    recieveAttack(x, y) {
        if (this.board[x][y] instanceof Ship) {
            if (!this.board[x][y].isSunk()) {
                this.board[x][y].hit();
            }
        } else if (this.board[x][y] === '') {
            this.board[x][y] = 'missed';
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
