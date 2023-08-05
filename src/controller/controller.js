import Gameplay from '../model/gameplay';
import View from '../view/view';

export default class Controller {
    static orientation = 'h';

    static shipLengths = [4, 3, 3, 2, 2, 1, 1, 1];

    static shipIndex = 0;

    static shipsPlaced = [];

    static placedRandomly = false;

    static attachEventListeners() {
        View.generateBoard('#place-ships-board');
        View.hideMainContainer();

        document.querySelector('#new-game').addEventListener('click', () => {
            View.showPlaceShips();
            View.showOverlay();
        });

        document.querySelector('#play-again-btn').addEventListener('click', () => {
            View.showPlaceShips();
            View.hidePlayAgain();
        });

        document.querySelector('#rotate').addEventListener('click', () => {
            this.changeRotation();
        });

        document.querySelector('#reset').addEventListener('click', () => {
            this.resetPlaceShipsBoard();
        });

        document.querySelector('#start').addEventListener('click', () => {
            if (this.placedRandomly || (this.shipsPlaced.length === 8)) {
                this.startNewGame();
            }
        });

        this.attachPlaceShipSquareListeners();
    }

    static attachSquareEventListeners() {
        document.querySelectorAll('#enemy-board .square').forEach((square) => {
            square.addEventListener('click', (e) => {
                if (e.target.textContent === '') {
                    this.playerMakesMove(e.target.dataset.row, e.target.dataset.col);
                }
            });
        });
    }

    static attachPlaceShipSquareListeners() {
        document.querySelectorAll('#place-ships-board .square').forEach((square) => {
            square.addEventListener('click', (e) => {
                let { row } = e.target.dataset;
                let { col } = e.target.dataset;
                let currentShipLength = this.shipLengths[this.shipIndex];
                if (this.shipIndex < this.shipLengths.length
                    && this.isShipPlacementValid(currentShipLength, Number(row), Number(col))) {
                    this.placeShip(row, col);
                }
            });
        });
    }

    static startNewGame() {
        Gameplay.startGame(this.shipsPlaced);
        this.attachSquareEventListeners();
        this.resetPlaceShipsBoard();
    }

    static playerMakesMove(row, col) {
        Gameplay.playerMakesMove(row, col);
    }

    static placeShip(row, col) {
        View.placeShip(this.shipLengths[this.shipIndex], row, col, this.orientation);
        this.shipsPlaced.push([this.shipLengths[this.shipIndex],
            Number(row), Number(col), this.orientation]);
        this.shipIndex += 1;
        View.changeNextShipMsg(this.shipLengths[this.shipIndex]);
    }

    static changeRotation() {
        this.orientation = this.orientation === 'h' ? 'v' : 'h';
    }

    static resetPlaceShipsBoard() {
        View.generateBoard('#place-ships-board');
        View.changeNextShipMsg(this.shipLengths[0]);
        this.attachPlaceShipSquareListeners();
        this.shipsPlaced = [];
        this.shipIndex = 0;
        this.orientation = 'h';
        this.placedRandomly = false;
    }

    static doesSquareHasShip(row, col) {
        console.log(row, col);
        const square = View.findSquare(String(row), String(col), '#place-ships-board');
        return square.classList.contains('ship');
    }

    static isShipPlacementValid(length, row, col) {
        // check if ship is out of bounds
        if (this.orientation === 'v' && (row + length - 1) > 9) return false;
        if (this.orientation === 'h' && (col + length - 1) > 9) return false;

        // check for adjacent ships
        if (this.orientation === 'h') {
            // for horizontal ship
            // check left
            if (col > 0 && this.doesSquareHasShip(row, col - 1)) return false;
            for (let i = 0; i < length; i++) {
                // check above
                if (row > 0 && this.doesSquareHasShip(row - 1, col + i)) return false;
                // check bellow
                if (row < 9 && this.doesSquareHasShip(row + 1, col + i)) return false;
            }
            // check right
            if ((col + length) < 10 && this.doesSquareHasShip(row, col + length)) return false;
        } else {
            // for vertical ship
            // check above
            if (row > 0 && this.doesSquareHasShip(row - 1, col)) return false;
            for (let i = 0; i < length; i++) {
                // check left
                if (col > 0 && this.doesSquareHasShip(row + i, col - 1)) return false;
                // check right
                if (col < 9 && this.doesSquareHasShip(row + i, col + 1)) return false;
            }
            // check bellow
            if ((row + length) < 10 && this.doesSquareHasShip(row + length, col)) return false;
        }

        return true;
    }
}
