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

    clearBoard() {
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

    doesNotHaveAdjShips(length, row, col, orientation) {
        if (orientation === 'h') {
            // for horizontal ship
            // check left
            if (col > 0 && this.board[row][col - 1] !== '') return false;
            for (let i = 0; i < length; i++) {
                // check above
                if (row > 0 && this.board[row - 1][col + i] !== '') return false;
                // check bellow
                if (row < 9 && this.board[row + 1][col + i] !== '') return false;
            }
            // check right
            if ((col + length) < 10 && this.board[row][col + length] !== '') return false;
        } else {
            // for vertical ship
            // check above
            if (row > 0 && this.board[row - 1][col] !== '') return false;
            for (let i = 0; i < length; i++) {
                // check left
                if (col > 0 && this.board[row + i][col - 1] !== '') return false;
                // check right
                if (col < 9 && this.board[row + i][col + 1] !== '') return false;
            }
            // check bellow
            if ((row + length) < 10 && this.board[row + length][col] !== '') return false;
        }
        return true;
    }

    placeShipsRandomly() {
        const shipLengths = [4, 3, 3, 2, 2, 1, 1, 1];
        const orientations = ['h', 'v'];
        shipLengths.forEach((length) => {
            let randomRow;
            let randomCol;
            let randomOrient;
            while (true) {
                randomRow = Math.floor(Math.random() * 10);
                randomCol = Math.floor(Math.random() * 10);
                randomOrient = orientations[Math.floor(Math.random() * 2)];
                if (randomOrient === 'v' && (randomRow + length - 1) > 9) continue;
                if (randomOrient === 'h' && (randomCol + length - 1) > 9) continue;
                if ((this.getPosition(randomRow, randomCol) === '')
                && this.doesNotHaveAdjShips(length, randomRow, randomCol, randomOrient)) {
                    break;
                }
            }
            this.placeShip(length, randomRow, randomCol, randomOrient);
        });
    }

    getPosition(row, col) {
        return this.board[row][col];
    }

    recieveAttack(row, col) {
        if (this.board[row][col] instanceof Ship) {
            if (!this.board[row][col].isSunk()) {
                this.board[row][col].hit();
            }
        } else if (this.board[row][col] !== 'missed') {
            this.board[row][col] = 'missed';
        }
    }

    getRemainingShips() {
        return this.ships.reduce((total, ship) => {
            if (!ship.isSunk()) {
                total += 1;
            }
            return total;
        }, 0);
    }

    isGameOver() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }
}
