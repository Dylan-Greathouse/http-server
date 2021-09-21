import { rm, mkdir } from 'fs/promises';
import { SimpleDataBase } from '../lib/simpleDb';

describe('simple data structure test', () => {
  const rootDir = './__tests__/store';
    
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      return mkdir(rootDir);
    });
  });

  it.skip('save object has id', () => {
    const simpleDb = new SimpleDataBase(rootDir);

    const data = {
      a: 'a',
      b: 'b'
    };

    return simpleDb
      .save(data)
      .then(() => {
        expect(data.id).toEqual(expect.any(String));
      });
  });

  it.skip('save and get an object', () => {
    const simpleDb = new SimpleDataBase(rootDir);

    const data = {
      a: 'a',
      b: 'b'
    };


    return simpleDb
      .save(data).then((object) => {
        return simpleDb.get(object).then((result) => {
          expect(result).toEqual({ a: 'a', b: 'b', id: expect.any(String) });
        });
      });   
  });

  it.skip('it should return null if it can not get object', () => {
    const simpleDb = new SimpleDataBase(rootDir);
    const data = {
      a: 666
    };
    


    return simpleDb
      .get(data).then((nullRes) => {
        expect(nullRes).toBe(null);
      });
      
  });



  // it('return all objects', () => {

  // });


});
