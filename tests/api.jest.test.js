const app = require('../app');
const supertest = require('supertest');
const api = supertest(app);

test('Request returns json', async () => {
    await api.get('/restaurants/search?q=sushi&lat=60.17045&lon=24.93147')
        .expect(200)
        .expect("Content-Type", /application\/json/);
});

test('Random request returns 404', async () => {
    await api.get('/random')
        .expect(404);
});