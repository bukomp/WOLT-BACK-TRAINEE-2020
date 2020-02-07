const api = require('express').Router();
const getRestaurants = require('../utils/fs').getFromFileJSON;

const filterByQuery = require('../utils/filters').filterByQuery;
const filterByDistance = require('../utils/filters').filterByDistance;


const restaurantsPath = __dirname+'/../data/restaurants.json';
const distanceToSearch = 3;


api.get('/search', async (req, res) => {
    /*
    q: query string. Full or partial match for the string is searched from name,
    description and tags fields. A minimum length for the query string is one character.

    lat: latitude coordinate (customer's location)

    lon : longitude coordinate (customer's location)
    */

    const queryString = (req.query.q !== undefined && req.query.q.length >= 1)
        ? req.query.q
        : undefined;
    const latitude = req.query.lat;
    const longitude = req.query.lon;
    const restaurantsJSON = (await getRestaurants(restaurantsPath)).restaurants;

    let selectedRestaurants = (queryString !== undefined)
        ? await filterByQuery(queryString, restaurantsJSON)
        : restaurantsJSON;

    selectedRestaurants =  (latitude !== undefined && longitude !== undefined)
        ? filterByDistance( selectedRestaurants, {longitude, latitude}, distanceToSearch)
        : selectedRestaurants;

    return res.json(selectedRestaurants);
});

module.exports = {
    api,
    filterByQuery
};