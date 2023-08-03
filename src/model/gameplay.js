import View from '../view/view';
import Player from './player';

export default class Gameplay {
    static player = new Player();

    static enemy = new Player();

    static startGame() {
        Gameplay.player.placeShipsRandomly();
        View.generatePlayerBoard(this.player.getBoard());
        Gameplay.enemy.placeShipsRandomly();
        View.generateEnemyBoard(this.enemy.getBoard());
    }
}
