const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello, world!');
  });
});