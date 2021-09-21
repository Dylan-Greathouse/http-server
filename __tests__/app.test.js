import request from 'supertest';
import app from '../lib/app';
import { readFile } from 'fs/promises';

describe('http server app routes', () => {
  it('should return index.html from GET /', async () => {
    const [res, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8')
    ]);
    // console.log(res, index);
    expect(res.text).toEqual(index);
    // expect(res.statusCode).toEqual(200);
  });
  
  it('should return main.css file contents on GET /public/css/main.css', async () => {
    
    const [res, css] = await Promise.all([
      request(app).get('/css/main.css'),
      readFile('./public/css/main.css', 'utf-8')
    ]);
    expect(res.text).toEqual(css);
  });
  
  it('should return 404 from GET /bad-file', async () => {
    const res = await request(app)
      .get('/bad-file');
      
    expect(res.statusCode).toEqual(404);

  });

  it.skip('should return 404 from GET /styles', async () => {
    const res = await request(app)
      .get('');
      
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual();
  });
});
