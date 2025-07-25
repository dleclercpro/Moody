import request from 'supertest';
import app, { server } from '../../../src/index';
import redis from '../../../src/redis';

describe('GET /test', () => {
  it('should return a 200 status code', async () => {
    const res = await request(app).get('/api/test');
    
    expect(res.statusCode).toBe(200);
  });
});



// Gracefully exit async processes
afterAll(async () => {
  await server.close();
  await redis.close();
});