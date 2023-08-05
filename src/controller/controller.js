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
                if (this.shipIndex < this.shipLengths.length) {
                    this.placeShip(e.target.dataset.row, e.target.dataset.col);
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
}
