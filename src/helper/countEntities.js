// Define the countEntities function that takes data as an argument
const countEntities = (data) => {
    // Check if data is not an array
    if(!Array.isArray(data)){
        // Return an error message if data is not an array
        return 'data structure must be an array';
    }

    // Check if data is falsy (null, undefined, etc.)
    if (!data) {
        // Return an error message if there is no data
        return 'No data';
    }

    // Check if data is an empty array
    if(data.length === 0 ){
        // Return an error message if data is empty
        return 'data must contain entries';
    }

    return data;


};

// Export the countEntities function
module.exports = countEntities;
