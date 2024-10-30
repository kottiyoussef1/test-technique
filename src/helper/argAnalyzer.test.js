const { getFilterArg, getPattern} = require('./argAnalyzer');

    describe('argAnalyzer', () => {
        let originalArgv;

        beforeEach(() => {
            originalArgv = process.argv;
        });

        afterEach(() => {
            process.argv = originalArgv;
        });

        test('should return the pattern', () => {
            process.argv = ['node', 'app.js', '--filter=lion'];
            const arg =  getFilterArg(process.argv);
            const pattern = getPattern(arg);            
            expect(pattern).toBe('lion');
        });

        test('should return null if no pattern is provided', () => {
            process.argv = ['node', 'app.js'];
            const arg =  getFilterArg(process.argv);
            const pattern = getPattern(arg);
            expect(pattern).toBe(null);
        });

        test('should return null if no filter arg is provided', () => {
            process.argv = ['node', 'app.js'];
            const arg =  getFilterArg(process.argv);
            expect(arg).toBe(undefined);
        });



    });
