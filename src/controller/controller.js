import Gameplay from '../model/gameplay';

export default class Controller {
    static attachEventListeners() {
        document.querySelector('#new-game').addEventListener('click', () => {
            Controller.startNewGame();
        });
    }

    static startNewGame() {
        Gameplay.startGame();
    }
}
