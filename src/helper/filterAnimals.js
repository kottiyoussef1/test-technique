
const filterAnimals = (data, pattern) => {
    // Check if data is an array, if not return an error message
    if (!Array.isArray(data)) {
        return 'data structure must be an array';
    }
    // Convert the pattern to lowercase for case-insensitive comparison
    const lowerCasePattern = pattern.toLowerCase();

    const filteredData = data
        .map(country => {
            // Filter people in each country
            const filteredPeople = country.people
                .map(person => {
                    // Filter animals in each person
                    const filteredAnimals = person.animals.filter(animal => animal.name.toLowerCase().includes(lowerCasePattern));
                    // Return the person with filtered animals if any animal matches the pattern, otherwise return null
                    return filteredAnimals.length > 0 ? { ...person, animals: filteredAnimals } : null;
                })
                // Remove null values from the filtered people array
                .filter(person => person !== null);

            // Return the country with filtered people if any person matches the pattern, otherwise return null
            return filteredPeople.length > 0 ? { ...country, people: filteredPeople } : null;
        })
        // Remove null values from the filtered data array
        .filter(country => country !== null);

    // Return the filtered data if any country matches the pattern, otherwise return 'No data'
    return filteredData.length > 0 ? filteredData : 'No data';
}


//exporter la fonction filterAnimals
module.exports = filterAnimals;