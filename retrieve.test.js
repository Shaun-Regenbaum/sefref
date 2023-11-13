import {retrieve, getAllBooks} from '../src/retrieve';

describe('Sefaria API Wrapper Tests', () => {
  test('list all valid texts', async () => {
    const result = await getAllBooks();
    console.log(result);
    expect(result).toBeDefined();
  });


});