import View from '../view/view';
import EnemyLogic from './enemyLogic';
import Player from './player';

export default class Gameplay {
    static player = new Player();

    static enemy = new Player();

    static enemyAI = new EnemyLogic(this.enemy);

    static startGame() {
        Gameplay.player.clearBoard();
        Gameplay.enemy.clearBoard();
        Gameplay.enemyAI.clearMoves();
        Gameplay.player.placeShipsRandomly();
        Gameplay.enemy.placeShipsRandomly();
        View.generatePlayerBoard(this.player.getBoard());
        View.generateEnemyBoard(this.enemy.getBoard());
        View.displayRemainingEnemyShips(this.enemy.getRemainingShips());
        View.displayRemainingPlayerShips(this.player.getRemainingShips());
    }

    static playerMakesMove(row, col) {
        const isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
        View.displayPlayerMoveResult(row, col, isSuccess);
        View.displayRemainingEnemyShips(this.enemy.getRemainingShips());
        if (!isSuccess) {
            Gameplay.enemyMakesMove();
        }
    }

    static enemyMakesMove() {
        while (true) {
            let [row, col, isSuccess] = Gameplay.enemyAI.attack(Gameplay.player.getBoard());
            View.displayEnemyMoveResult(row, col, isSuccess);
            View.displayRemainingPlayerShips(this.player.getRemainingShips());
            if (!isSuccess) {
                break;
            }
        }
    }
}
