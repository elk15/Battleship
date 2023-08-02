import Player from '../player';
import Ship from '../ship';

describe('player', () => {
    let player;

    const doesShipExist = (multiArr, row, col) => multiArr[row][col] instanceof Ship;

    beforeEach(() => {
        player = new Player();
    });

    test('should place ships correctly', () => {
        const shipCoords = [[3, 0, 0, 'v'], [2, 6, 8, 'h']];
        player.placeShips(shipCoords);
        expect(doesShipExist(player.getBoard(), 1, 0)).toBeTruthy();
    });

    test('should hit ships in enemy board', () => {
        const enemy = new Player();
        enemy.placeShips([[3, 0, 0, 'v']]);
        expect(player.makeMove([0, 0], enemy.getBoard())).toBeTruthy();
    });

    test('should return false if it misses', () => {
        const enemy = new Player();
        enemy.placeShips([[3, 0, 0, 'v']]);
        expect(player.makeMove([9, 9], enemy.getBoard())).toBeDefined();
        expect(player.makeMove([9, 9], enemy.getBoard())).toBeFalsy();
    });
});
