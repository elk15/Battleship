import Player from '../player';
import Ship from '../ship';

describe('player', () => {
    let player;
    let enemy;
    const doesShipExist = (multiArr, row, col) => multiArr[row][col] instanceof Ship;

    beforeEach(() => {
        player = new Player();
        enemy = new Player();
        enemy.placeShips([[3, 0, 0, 'v']]);
    });

    test('should place ships correctly', () => {
        const shipCoords = [[3, 0, 0, 'v'], [2, 6, 8, 'h']];
        player.placeShips(shipCoords);
        expect(doesShipExist(player.getBoard().getBoard(), 1, 0)).toBeTruthy();
    });

    test('should hit ships in enemy board', () => {
        expect(player.makeMove(0, 0, enemy.getBoard())).toBeTruthy();
    });

    test('should return false if it misses', () => {
        expect(player.makeMove(9, 9, enemy.getBoard())).toBeDefined();
        expect(player.makeMove(9, 9, enemy.getBoard())).toBeFalsy();
    });
});
