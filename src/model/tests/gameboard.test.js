import Gameboard from '../gameboard';

describe('gameboard', () => {
    let testBoard;

    beforeEach(() => {
        testBoard = new Gameboard();
        testBoard.placeShip(4, 0, 1, 'h');
        testBoard.placeShip(3, 4, 3, 'v');
    });

    test('should place ships on board correctly', () => {
        expect(testBoard.getPosition(0, 3).length).toBe(4);
    });

    test('should place random ships', () => {
        const randomBoard = new Gameboard();
        randomBoard.placeShipsRandomly();
        expect(randomBoard.ships.length).toBe(8);
    });

    test('should recieve attack and hit correct ships', () => {
        testBoard.recieveAttack(0, 3);
        testBoard.recieveAttack(0, 4);
        expect(testBoard.getPosition(0, 2).timesHit).toBe(2);
    });

    test('should keep track of missed attacks', () => {
        testBoard.recieveAttack(0, 6);
        expect(testBoard.getPosition(0, 6)).toBe('missed');
    });

    test('should be able to report when all ships are sunk', () => {
        testBoard.recieveAttack(0, 1);
        testBoard.recieveAttack(0, 2);
        testBoard.recieveAttack(0, 3);
        testBoard.recieveAttack(0, 4);

        testBoard.recieveAttack(0, 0);

        testBoard.recieveAttack(4, 3);
        testBoard.recieveAttack(5, 3);
        testBoard.recieveAttack(6, 3);

        expect(testBoard.isGameOver()).toBeTruthy();
    });

    test('should be able to report when there are ships remaining', () => {
        testBoard.recieveAttack(0, 1);
        testBoard.recieveAttack(0, 2);

        testBoard.recieveAttack(0, 0);

        testBoard.recieveAttack(4, 3);
        testBoard.recieveAttack(6, 3);

        expect(testBoard.isGameOver()).toBeDefined();
        expect(testBoard.isGameOver()).toBeFalsy();
    });
});
