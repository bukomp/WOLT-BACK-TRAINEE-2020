const api = require('express').Router();
const getRestaurants = require('../utils/fs').getFromFileJSON;

const filterByQuery = require('../utils/filters').filterByQuery;
const filterByDistance = require('../utils/filters').filterByDistance;

const restaurantsPath = require('../config').restaurantsPath;
const distanceToSearch = require('../config').distance;

/*
    Api call that returns list of restaurants based on request.
    Request must contain either query string or coordinates.
    If none of the parameters are present in the request error 400 will be returned!

    q: query string. Full or partial match for the string is searched from name,
    description and tags fields. A minimum length for the query string is one character.

    lat: latitude coordinate (customer's location)

    lon : longitude coordinate (customer's location)
*/
api.get('/search', async (req, res) => {
    if ((req.query.q && (req.query.lat && req.query.lon) ) === undefined)
        return res.status(400).json({ error : 'request query must contain: q (query string) or lat (latitude coordinate), lon (longitude coordinate)' });

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