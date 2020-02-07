const app = require('express')();

const restaurantsRouter = require('./routers/restaurants.api').api;

app.use('/restaurants', restaurantsRouter);
app.use('/*', (req, res) => {
    return res.status(404).send();
});

module.exports = app;

