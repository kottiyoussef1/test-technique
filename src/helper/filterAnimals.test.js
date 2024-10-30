const filterAnimals = require('./filterAnimals');

describe('filterAnimals', () => {
    const data = [
        {
            name: 'Country1',
            people: [
                {
                    name: 'Person1',
                    animals: [
                        { name: 'Lion' },
                        { name: 'Leopard' }
                    ]
                },
                {
                    name: 'Person2',
                    animals: [
                        { name: 'Elephant' },
                        { name: 'Eagle' }
                    ]
                }
            ]
        },
        {
            name: 'Country2',
            people: [
                {
                    name: 'Person3',
                    animals: [
                        { name: 'Tiger' },
                        { name: 'Turtle' }
                    ]
                }
            ]
        }
    ];

    test('should filter animals by pattern', () => {
        const pattern = 'li';
        const result = filterAnimals(data, pattern);
        expect(result).toEqual([
            {
                name: 'Country1',
                people: [
                    {
                        name: 'Person1',
                        animals: [
                            { name: 'Lion' }
                        ]
                    }
                ]
            }
        ]);
    });

    test('should return "No data" if no animals match the pattern', () => {
        const pattern = 'zebra';
        const result = filterAnimals(data, pattern);
        expect(result).toBe('No data');
    });

    test('should be case insensitive', () => {
        const pattern = 'LION';
        const result = filterAnimals(data, pattern);
        expect(result).toEqual([
            {
                name: 'Country1',
                people: [
                    {
                        name: 'Person1',
                        animals: [
                            { name: 'Lion' }
                        ]
                    }
                ]
            }
        ]);
    });

    test('should return "No data" if input data is empty', () => {
        const pattern = 'li';
        const result = filterAnimals([], pattern);
        expect(result).toBe('No data');
    });

    test('should return "No data" if pattern is empty', () => {
        const pattern = '';
        const result = filterAnimals(data, pattern);
        expect(result).toEqual(data);
    });
});