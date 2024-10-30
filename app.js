// import data from './data/data.js'
const datasrc = require('./data/data.js');

// Destructure pattern  and countArg from the argAnalyzer module
const {pattern, countArg} = require("./src/helper/argAnalyzer.js");

// Destructure filterAnimals from the filterAnimals module
const filterAnimals = require("./src/helper/filterAnimals.js");

// Destructure countEntities from the countEntities module
const countEntities = require("./src/helper/countEntities.js");

const data = datasrc.data;

// Filter the data based on the pattern if it exists, otherwise use the original data
const filteredData = pattern ? filterAnimals(data, pattern) : data;

// Count the entities in the filtered data if countArg is true, otherwise use the filtered data
const result = countArg ? countEntities(filteredData) : filteredData;

    // If pattern  is not  provided, log a message to the console
    if (!pattern && !countArg) {
        console.log("Please specify a --filter  and/or --count option ");
    } else {
        console.log(JSON.stringify(result, null, 2));
    }


