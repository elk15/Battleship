import Ship from '../ship';

describe('ship', () => {
    let testShip;
    beforeEach(() => {
        testShip = new Ship(4);
    });

    test('should start with 0 hits', () => {
        expect(testShip.timesHit).toBe(0);
    });

    test('should increase times hit by 1', () => {
        testShip.hit();
        testShip.hit();
        expect(testShip.timesHit).toBe(2);
    });

    test('sink ships after too many hits', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBeTruthy();
    });

    test('not sink ships if hits are lower than length', () => {
        testShip.hit();
        expect(testShip.isSunk()).toBeFalsy();
    });
});
