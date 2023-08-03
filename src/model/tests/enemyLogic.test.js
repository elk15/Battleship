import EnemyLogic from '../enemyLogic';
import Gameboard from '../gameboard';

describe('enemy logic', () => {
    let testLogic;
    let testBoard;

    beforeEach(() => {
        testLogic = new EnemyLogic();
        testBoard = new Gameboard();
        testBoard.placeShip(1, 0, 9, 'h');
        testBoard.placeShip(3, 2, 2, 'h');
        testLogic.movesDone = [
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'ship'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'ship', '', '', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', '', 'miss', 'miss', '', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
            ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
        ];
    });

    test('should not repeat the same move', () => {
        expect(testLogic.isMoveDoneBefore(5, 1)).toBeFalsy();
        expect(testLogic.isMoveDoneBefore(5, 1)).toBeDefined();
    });

    test('should return true if the move has been done', () => {
        expect(testLogic.isMoveDoneBefore(0, 0)).toBeTruthy();
    });

    test('should find position of ship', () => {
        expect(testLogic.findShip(testBoard)).toEqual([0, 9]);
    });

    test('should find position of first unsinked ship', () => {
        testBoard.recieveAttack(0, 9);
        expect(testLogic.findShip(testBoard)).toEqual([2, 2]);
    });

    test('should calculate a valid move based on direction', () => {
        expect(testLogic.calculateMove(5, 0)).toEqual([5, 1]);
    });

    test('should return null if it cant calculate a valid move', () => {
        expect(testLogic.calculateMove(9, 0)).toEqual(null);
    });
});
