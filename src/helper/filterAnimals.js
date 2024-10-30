
const filterAnimals = (data, pattern) => {
    // Check if data is an array, if not return an error message
    if (!Array.isArray(data)) {
        return 'data structure must be an array';
    }

    return data;

}


//exporter la fonction filterAnimals
module.exports = filterAnimals;