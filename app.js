const app = require('express')();

const restaurantsRouter = require('./routers/restaurants.api').api;

//adding router with api call
app.use('/restaurants', restaurantsRouter);

//securing rest of calls
app.use('/*', (req, res) => {
    return res.status(404).send();
});

module.exports = app;

