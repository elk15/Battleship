import View from '../view/view';
import Player from './player';

export default class Gameplay {
    static player = new Player();

    static enemy = new Player();

    static startGame() {
        Gameplay.player.clearBoard();
        Gameplay.enemy.clearBoard();
        Gameplay.player.placeShipsRandomly();
        Gameplay.enemy.placeShipsRandomly();
        View.generatePlayerBoard(this.player.getBoard());
        View.generateEnemyBoard(this.enemy.getBoard());
        View.displayRemainingEnemyShips(this.enemy.getRemainingShips());
        View.displayRemainingPlayerShips(this.player.getRemainingShips());
    }

    static playerMakesMove(row, col) {
        const isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
        View.displayMoveResult(row, col, isSuccess);
        View.displayRemainingEnemyShips(this.enemy.getRemainingShips());
    }
}
