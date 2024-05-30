const request = require('supertest');
const app = require('./index');

describe('Server', () => {
  it('should listen on the specified port', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});