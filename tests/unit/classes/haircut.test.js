const Haircut = require('../../../classes/haircut');

describe('Haircut class', () => {
    test('Check if the constructor is defaulting values', () => {
        const newHaircut = new Haircut();
        expect(newHaircut.description).toHaveLength(0);
        expect(newHaircut.price).toBe(0);
    });
});
