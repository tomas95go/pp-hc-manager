const Haircut = require('../../../classes/haircut');

describe('Haircut class', () => {
    test(`Haircut instance properties should default to '' and 0 `, () => {
        const newHaircut = new Haircut();
        expect(newHaircut.description.length).toBeGreaterThan(0);
        expect(newHaircut.price).toBeGreaterThan(0);
    });
});

//Goal: Create a haircut

//New haircut attributes should be received from the client

//Required attributes must not be null

//Required attributes must not be undefined

//Description should be a string

//Price should be an integer number

//Create a haircut object

//Populate that haircut object with attributes
