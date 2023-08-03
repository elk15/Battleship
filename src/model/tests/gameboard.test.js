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

    test('should check if there are adjacent ships near startpoint', () => {
        expect(testBoard.doesNotHaveAdjShips(2, 1, 4, 'v')).toBeFalsy();
    });

    test('should return true if there are no nearby ships', () => {
        expect(testBoard.doesNotHaveAdjShips(1, 9, 9, 'h')).toBeTruthy();
    });

    test('should check if there are adjacent ships near the endpoint', () => {
        expect(testBoard.doesNotHaveAdjShips(3, 5, 0, 'h')).toBeFalsy();
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

    test('should be able to return the correct amount of unsinked ships', () => {
        expect(testBoard.getRemainingShips()).toBe(2);
    });

    test('should be able to return the correct amount of unsinked ships after sinking one', () => {
        testBoard.recieveAttack(4, 3);
        testBoard.recieveAttack(5, 3);
        testBoard.recieveAttack(6, 3);
        expect(testBoard.getRemainingShips()).toBe(1);
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
