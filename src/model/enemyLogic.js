export default class EnemyLogic {
    constructor(player) {
        this.player = player;
        this.movesDone = [
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
    }

    clearMoves() {
        this.movesDone = [
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
    }

    attack(enemyBoard) {
        let row = null;
        let col = null;

        let shipLocation = this.findShip();

        if (shipLocation) {
            let [shipRow, shipCol] = shipLocation;
            [row, col] = this.calculateMove(shipRow, shipCol);
        } else {
            [row, col] = this.getRandomMove();
        }
        const isSuccess = this.player.makeMove(row, col, enemyBoard);
        if (isSuccess) {
            this.movesDone[row][col] = 'ship';
        } else {
            this.movesDone[row][col] = 'miss';
        }
        return isSuccess;
    }

    isMoveDoneBefore(row, col) {
        return this.movesDone[row][col] !== '';
    }

    findShip() {
        for (let row = 0; row < this.movesDone.length; row++) {
            for (let col = 0; col < this.movesDone.length; col++) {
                if (this.movesDone[row][col] === 'ship') {
                    return [row, col];
                }
            }
        }
        return null;
    }

    getRandomMove() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        while (this.isMoveDoneBefore(row, col)) {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        }
        return [row, col];
    }

    calculateMove(row, col) {
        let move = null;
        // check left
        if (col > 0 && !this.isMoveDoneBefore(row, col - 1)) {
            move = [row, col - 1];
        }
        // check right
        if (col < 9 && !this.isMoveDoneBefore(row, col + 1)) {
            move = [row, col + 1];
        }
        // check up
        if (row > 0 && !this.isMoveDoneBefore(row - 1, col)) {
            move = [row - 1, col];
        }
        // check down
        if (row < 9 && !this.isMoveDoneBefore(row + 1, col)) {
            move = [row + 1, col];
        }
        return move;
    }
}
