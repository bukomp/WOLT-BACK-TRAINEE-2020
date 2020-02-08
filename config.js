
//Port on which application will run
const PORT = 3001;

//Path (from this file) to file containing array of restaurants
const restaurantsPath = __dirname+'/data/restaurants.json';

//Distance between given and restaurant coordinates
const distance = 3;

/*
    If application is launched    WITHOUT    any changes keep default settings!
 */

module.exports = {
    PORT,
    restaurantsPath,
    distance
};