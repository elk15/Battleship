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

    doesNotHaveAdjShips(length, row, col, orientation) {
        if (row > 0 && this.board[row - 1][col] !== '') return false;
        if (row < 9 && this.board[row + 1][col] !== '') return false;
        if (col > 0 && this.board[row][col - 1] !== '') return false;
        if (col < 9 && this.board[row][col + 1] !== '') return false;
        const endRow = (orientation === 'h') ? row : row + length;
        const endCol = (orientation === 'v') ? col : col + length;
        if (endRow > 0 && this.board[endRow - 1][endCol] !== '') return false;
        if (endRow < 9 && this.board[endRow + 1][endCol] !== '') return false;
        if (endCol > 0 && this.board[endRow][endCol - 1] !== '') return false;
        if (endCol < 9 && this.board[endRow][endCol + 1] !== '') return false;
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
                if (randomOrient === 'v' && randomRow + length > 9) continue;
                if (randomOrient === 'h' && randomCol + length > 9) continue;
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

    isGameOver() {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk()) {
                return true;
            }
        }
        return false;
    }
}
