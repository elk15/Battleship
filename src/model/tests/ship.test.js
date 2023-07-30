import Ship from '../ship';

test('should increase times hit by 1', () => {
    const newShip = new Ship(8);
    newShip.hit();
    newShip.hit();
    expect(newShip.timesHit).toBe(2);
});

test('sink ships after too many hits', () => {
    const newShip = new Ship(4);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
});

test('not sink ships if hits are lower than length', () => {
    const newShip = new Ship(4);
    newShip.hit();
    expect(newShip.isSunk()).toBeFalsy();
});
