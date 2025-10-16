const request = require('supertest');
const app = require('../server');

describe('Review API', () => {
  it('GET /reviews should return all reviews', async () => {
    const res = await request(app).get('/reviews');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /reviews/:id should return 404 if not found', async () => {
    const res = await request(app).get('/reviews/615f1f1f1f1f1f1f1f1f1f1f');
    expect(res.statusCode).toBe(404);
  });
});
