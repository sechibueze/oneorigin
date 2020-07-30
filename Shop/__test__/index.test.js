const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe('Shop base URL', () => {
  it('Should call the shop index endpoint', async (done) => {
    const response = await request.get('/api/shop');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.message).toBeDefined();

    done();
  });
});