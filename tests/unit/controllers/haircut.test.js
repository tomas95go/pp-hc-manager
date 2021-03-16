const { create } = require('../../../controllers/haircut');
const Haircut = require('../../../classes/haircut');
describe('haircut controller', () => {
    test('Request should not: have null/undefined body/properties, have properties with incorrect type', () => {
        const mockRequest = jest.fn((description, price) => {
            const req = {};
            req.body = {
                description,
                price,
            };
            return req;
        });

        const description = 'Military';
        const price = 1500;

        expect(description).toBeDefined();
        expect(price).toBeDefined();
        expect(mockRequest).toBeDefined();

        const req = mockRequest(description, price);

        expect(mockRequest).toHaveBeenCalled();

        const body = {
            description: description,
            price: price,
        };

        expect(req.body).toEqual(expect.objectContaining(body));
        expect(req.body.description).not.toEqual(undefined);
        expect(req.body.price).not.toEqual(undefined);
        expect(req.body.description).not.toBeNull();
        expect(req.body.price).not.toBeNull();
        expect(req.body.description).toHaveLength(body.description.length);
        expect(req.body.price).toBeGreaterThan(0);
        expect(req.body.price).toEqual(body.price);
    });

    test('Controller create method should create a new Haircut object', () => {
        const mockRequest = jest.fn((description, price) => {
            const req = {};
            req.body = {
                description,
                price,
            };
            return req;
        });

        const description = 'Military';
        const price = 1500;

        expect(description).toBeDefined();
        expect(price).toBeDefined();
        expect(mockRequest).toBeDefined();

        const req = mockRequest(description, price);

        expect(mockRequest).toHaveBeenCalled();

        const haircut = create(req, Haircut);
        expect(haircut).toBeInstanceOf(Haircut);
        expect(haircut).toEqual(expect.objectContaining(req.body));
        expect(haircut.description).not.toBeNull();
        expect(haircut.price).not.toBeNull();
        expect(haircut.description).not.toHaveLength(0);
        expect(haircut.price).not.toEqual(0);
        expect(haircut.description).toEqual(req.body.description);
        expect(haircut.price).toEqual(req.body.price);
    });
});
