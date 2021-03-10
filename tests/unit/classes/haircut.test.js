const Haircut = require('../../../classes/haircut');

describe('Haircut class', () => {
    test(`Haircut instance properties should default to '' and 0 `, () => {
        const newHaircut = new Haircut();
        expect(newHaircut.description.length).toBeGreaterThan(0);
        expect(newHaircut.price).toBeGreaterThan(0);
    });
});
