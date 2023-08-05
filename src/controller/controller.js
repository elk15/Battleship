import Gameplay from '../model/gameplay';
import View from '../view/view';

export default class Controller {
    static attachEventListeners() {
        View.generateBoard('#place-ships-board');

        document.querySelector('#new-game').addEventListener('click', () => {
            Controller.startNewGame();
        });

        document.querySelector('#play-again-btn').addEventListener('click', () => {
            Controller.startNewGame();
        });
    }

    static attachSquareEventListeners() {
        document.querySelectorAll('#enemy-board .square').forEach((square) => [
            square.addEventListener('click', (e) => {
                if (e.target.textContent === '') {
                    Controller.playerMakesMove(e.target.dataset.row, e.target.dataset.col);
                }
            }),
        ]);
    }

    static startNewGame() {
        Gameplay.startGame();
        Controller.attachSquareEventListeners();
    }

    static playerMakesMove(row, col) {
        Gameplay.playerMakesMove(row, col);
    }
}
