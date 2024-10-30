// Get the command line arguments, excluding the first two (node and script path)
const args = process.argv.slice(2);

// Function to find the argument that starts with '--filter='
const getFilterArg = (args) => args.find(arg => arg.startsWith('--filter='));

// Function to extract the pattern from the filter argument
const getPattern = (filterArg) => filterArg ? filterArg.split('=')[1] : null;

// Get the filter argument from the command line arguments
const filterArg = getFilterArg(args);

// Get the pattern from the filter argument
const pattern = getPattern(filterArg);

// Check if the '--count' argument is present in the command line arguments
const countArg = args.includes('--count');

// Export the pattern, countArg, getPattern, and getFilterArg functions
module.exports = { pattern, countArg, getPattern, getFilterArg };
