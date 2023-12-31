import View from '../view/view';
import EnemyLogic from './enemyLogic';
import Player from './player';

export default class Gameplay {
    static player = new Player();

    static enemy = new Player();

    static enemyAI = new EnemyLogic(Gameplay.enemy);

    static startGame(ships) {
        Gameplay.enemy.clearBoard();
        Gameplay.enemyAI.clearMoves();
        if (ships.length === 8) {
            Gameplay.player.clearBoard();
            Gameplay.player.placeShips(ships);
        }
        Gameplay.enemy.placeShipsRandomly();
        View.generatePlayerBoard(this.player.getBoard());
        View.generateEnemyBoard();
        View.displayRemainingEnemyShips(this.enemy.getRemainingShips());
        View.displayRemainingPlayerShips(this.player.getRemainingShips());
        View.displayPlayerTurn();
        View.hideOverlay();
        View.hidePlayAgain();
        View.hidePlaceShips();
        View.showMainContainer();
    }

    static playerMakesMove(row, col) {
        const isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
        View.displayPlayerMoveResult(row, col, isSuccess);
        View.displayRemainingEnemyShips(Gameplay.enemy.getRemainingShips());
        if (Gameplay.enemy.isGameOver()) {
            View.displayPlayerWin();
            View.showOverlay();
            View.showPlayAgain('p');
            return;
        }
        if (!isSuccess) {
            View.displayEnemyTurn();
            setTimeout(Gameplay.enemyMakesMove, 500);
        }
    }

    static enemyMakesMove() {
        while (true) {
            let [row, col, isSuccess] = Gameplay.enemyAI.attack(Gameplay.player.getBoard());
            View.displayEnemyMoveResult(row, col, isSuccess);
            View.displayRemainingPlayerShips(Gameplay.player.getRemainingShips());
            if (Gameplay.player.isGameOver()) {
                View.displayEnemyWin();
                View.showOverlay();
                View.showPlayAgain('e');
                return;
            }
            if (!isSuccess) {
                View.displayPlayerTurn();
                break;
            }
        }
    }

    static createRandomBoard() {
        Gameplay.player.clearBoard();
        Gameplay.player.placeShipsRandomly();
        View.generateBoard('#place-ships-board', Gameplay.player.getBoard());
        View.changeNextShipMsg();
    }
}
