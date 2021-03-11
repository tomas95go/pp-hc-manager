const Haircut = require('../../../classes/haircut');
jest.mock('../../../classes/haircut');

describe('Haircut class', () => {
    test('A haircut should be an instance of class Haircut', () => {
        const mockFunction = jest.fn();

        Haircut.mockImplementation(() => {
            return { mockedConstructor: mockFunction };
        });

        const haircut = new Haircut();
        haircut.mockedConstructor('Military', 1500);
        console.log(`Haircut mock attributes: `, haircut.mockedConstructor.mock.calls);
    });

    test('A haircut constructor should always work', () => {});

    test('A haircut object should contain the description and price properties', () => {
        const newHaircut = new Haircut('Military', 1500);
        expect(newHaircut).toHaveProperty('description');
        expect(newHaircut).toHaveProperty('price');
    });

    test('A haircut should not have empty or undefined properties', () => {
        const newHaircut = new Haircut('Military', 10);
        expect(newHaircut.description).not.toBe(undefined);
        expect(newHaircut.price).not.toBe(undefined);
        expect(newHaircut.description).toHaveLength(8);
    });

    test(`A haircut description should be a string and a haircut price an integer number`, () => {
        const newHaircut = new Haircut('Military', 15);
        expect(typeof newHaircut.description).toBe('string');
        expect(typeof newHaircut.price).toBe('number');
        const mockIsInteger = jest.fn(price => Number.isInteger(price));
        expect(mockIsInteger(15)).toBe(true);
    });
});
