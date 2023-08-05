import Gameplay from '../model/gameplay';
import View from '../view/view';

export default class Controller {
    static orientation = 'h';

    static shipLengths = [4, 3, 3, 2, 2, 1, 1, 1];

    static shipIndex = 0;

    static attachEventListeners() {
        View.generateBoard('#place-ships-board');

        document.querySelector('#new-game').addEventListener('click', () => {
            this.startNewGame();
        });

        document.querySelector('#play-again-btn').addEventListener('click', () => {
            this.startNewGame();
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
        Gameplay.startGame();
        this.attachSquareEventListeners();
        View.generateBoard('#place-ships-board');
        this.attachPlaceShipSquareListeners();
        this.shipIndex = 0;
    }

    static playerMakesMove(row, col) {
        Gameplay.playerMakesMove(row, col);
    }

    static placeShip(row, col) {
        View.placeShip(this.shipLengths[this.shipIndex], row, col, this.orientation);
        this.shipIndex += 1;
    }
}
