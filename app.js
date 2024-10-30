// import data from './data/data.js'
const datasrc = require('./data/data.js');

// Destructure pattern from the argAnalyzer module
const {pattern} = require("./src/helper/argAnalyzer.js");

// Destructure filterAnimals from the filterAnimals module
const filterAnimals = require("./src/helper/filterAnimals.js");

const data = datasrc.data;

// Filter the data based on the pattern if it exists, otherwise use the original data
const filteredData = pattern ? filterAnimals(data, pattern) : data;

    // If pattern  is not  provided, log a message to the console
    if (!pattern) {
        console.log("Please specify a --filter ");
    } else {
        console.log("--filer exists");
    }


console.log(pattern,'patter')