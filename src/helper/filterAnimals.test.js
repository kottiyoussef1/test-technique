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