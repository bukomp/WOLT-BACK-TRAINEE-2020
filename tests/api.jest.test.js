const app = require('../app');
const supertest = require('supertest');
const api = supertest(app);

//tests if request returns json and doesn't return any errors
test('Request returns json', async () => {
    await api.get('/restaurants/search?q=sushi&lat=60.17045&lon=24.93147')
        .expect(200)
        .expect("Content-Type", /application\/json/);
});

//tests if request returns 404 error with random request
test('Random request returns 404', async () => {
    await api.get(`/${Math.random().toString(36).substring(2, 15)}`)
        .expect(404);
});