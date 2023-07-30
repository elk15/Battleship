import Gameboard from '../gameboard';

describe('gameboard', () => {
    let testBoard;

    beforeEach(() => {
        testBoard = new Gameboard();
        testBoard.placeShip(4, 0, 1, 'h');
        testBoard.placeShip(3, 4, 3, 'v');
    });

    test('should place ships on board correctly', () => {
        testBoard.placeShip(2, 8, 9, 'h');
        expect(testBoard.getPosition(9, 9).length).toBe(2);
    });

    test('should recieve attack and hit correct ships', () => {
        testBoard.recieveAttack(3, 1);
        testBoard.recieveAttack(1, 1);
        expect(testBoard.getPosition(3, 1).timesHit).toBe(2);
    });

    test('should keep track of missed attacks', () => {
        testBoard.recieveAttack(0, 6);
        expect(testBoard.getPosition(0, 6)).toBe('missed');
    });

    test('should be able to report when all ships are sunk', () => {
        testBoard.recieveAttack(3, 1);
        testBoard.recieveAttack(1, 1);
        testBoard.recieveAttack(0, 1);
        testBoard.recieveAttack(2, 1);

        testBoard.recieveAttack(0, 0);

        testBoard.recieveAttack(4, 4);
        testBoard.recieveAttack(4, 5);
        testBoard.recieveAttack(4, 6);

        expect(testBoard.isGameOver()).toBeTruthy();
    });

    test('should be able to report when there are ships remaining', () => {
        testBoard.recieveAttack(3, 1);
        testBoard.recieveAttack(1, 1);

        testBoard.recieveAttack(9, 0);

        testBoard.recieveAttack(4, 4);
        testBoard.recieveAttack(4, 6);

        expect(testBoard.isGameOver()).toBeDefined();
        expect(testBoard.isGameOver()).toBeFalsy();
    });
});
