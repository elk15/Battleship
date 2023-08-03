import Gameplay from '../model/gameplay';

export default class Controller {
    static attachEventListeners() {
        document.querySelector('#new-game').addEventListener('click', () => {
            Controller.startNewGame();
            Controller.attachSquareEventListeners();
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
    }

    static playerMakesMove(row, col) {
        Gameplay.playerMakesMove(row, col);
    }
}
