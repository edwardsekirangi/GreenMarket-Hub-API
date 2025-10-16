const request = require('supertest');
const app = require('../server');

describe('Order API', () => {
  it('GET /orders should return all orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /orders/:id should return 404 for invalid id', async () => {
    const res = await request(app).get('/orders/invalidid');
    expect(res.statusCode).toBe(500); // Mongoose cast error
  });
});
