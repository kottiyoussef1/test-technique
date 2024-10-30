const countEntities = require('./countEntities');

describe('countEntities', () => {
    test('should return "No data" if data is null', () => {
        expect(countEntities(null)).toBe('data structure must be an array');
    });

    test('should return "No data" if data is not an array', () => {
        expect(countEntities({})).toBe('data structure must be an array');
    });

    test('should return "data must contain entries" if data is an empty array', () => {
        expect(countEntities([])).toBe('data must contain entries');
    });

    test('should count people and animals correctly', () => {
        const data = [
            {
                name: 'Country1',
                people: [
                    {
                        name: 'Person1',
                        animals: ['Animal1', 'Animal2']
                    },
                    {
                        name: 'Person2',
                        animals: ['Animal3']
                    }
                ]
            },
            {
                name: 'Country2',
                people: [
                    {
                        name: 'Person3',
                        animals: []
                    }
                ]
            }
        ];

        const expectedOutput = [
            {
                name: 'Country1 [2]',
                people: [
                    {
                        name: 'Person1 [2]',
                        animals: ['Animal1', 'Animal2']
                    },
                    {
                        name: 'Person2 [1]',
                        animals: ['Animal3']
                    }
                ]
            },
            {
                name: 'Country2 [1]',
                people: [
                    {
                        name: 'Person3 [0]',
                        animals: []
                    }
                ]
            }
        ];

        expect(countEntities(data)).toEqual(expectedOutput);
    });
});