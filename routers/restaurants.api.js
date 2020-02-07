const api = require('express').Router();
const getRestaurants = require('../utils/fs').getFromFileJSON;

const restaurantsPath = __dirname+'/../materials/restaurants.json';
const distanceToSearch = 3;


const filterByQuery = async (query, array) => {
    if(query.length<=0) return null;
    const tempArr = array.filter( object =>
            object.name.includes(query)
        ||  object.description.includes(query)
        ||  object.tags.includes(query)
    );

    return tempArr;
};
const filterByDistance = (array, coordinates, distance) => {

    const distanceFilter = (lat1, lon1, lat2, lon2) => {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            const radlat1 = Math.PI * lat1/180;
            const radlat2 = Math.PI * lat2/180;
            const theta = lon1-lon2;
            const radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;

            return dist;
        }
    };

    const tempArr = array.filter( object =>
        distance >= distanceFilter(coordinates.latitude, coordinates.longitude, object.location[1], object.location[0])
    );

    return tempArr;
};

api.get('/*', async (req, res) => {
    /*
    q: query string. Full or partial match for the string is searched from name,
    description and tags fields. A minimum length for the query string is one character.

    lat: latitude coordinate (customer's location)

    lon : longitude coordinate (customer's location)
    */

    const queryString = req.query.q;
    const latitude = req.query.lat;
    const longitude = req.query.lon;
    const restaurantsJSON = (await getRestaurants(restaurantsPath)).restaurants;

    let selectedRestaurants = await filterByQuery(queryString, restaurantsJSON);
    selectedRestaurants = filterByDistance( selectedRestaurants, {longitude, latitude}, distanceToSearch);

    return res.json(selectedRestaurants);
});

module.exports = {
    api,
    filterByQuery
};