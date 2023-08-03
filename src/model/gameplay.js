import Player from './player';

export default class Gameplay {
    static player = new Player();

    static enemy = new Player();

    static startGame() {
        Gameplay.player.placeShipsRandomly();
        Gameplay.enemy.placeShipsRandomly();
    }
}
