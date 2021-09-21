import bodyParser from '../lib/bodyParser';
// import { readFile } from 'fs/promises';


describe('takes a HTTP request and returns parsed body', () => {
  it('returns null if method is not POST, PUT, or PATCH', async () => {
      
    const parse = bodyParser({
      method: 'GET'
    });
    expect(parse).toEqual(null);
  });

  it.skip('throws if content-type is not application/json', () => {

  });

  it.skip('returns deserialized body from req emitted events (using JSON.parse)', () => {

  });

  it.skip('throws if failure happens in deserialization', () => {

  });
});
