import fetch from 'node-fetch';
const BASE_URL = 'https://www.sefaria.org/api/';

async function isValidBook(book:string) {
    const response = await fetch(`${BASE_URL}index/${book}`);
    return response.ok;
  }
  
export async function retrieve(book:string, from:string, to:string) {
    if (!await isValidBook(book)) {
      throw new Error('Invalid book name');
    }
  
    const response = await fetch(`${BASE_URL}texts/${book}.${location}`);
    if (!response.ok) {
      throw new Error('Failed to retrieve text');
    }
  
    return response.json();
  }

export async function getAllBooks(){
    const response = await fetch(`${BASE_URL}index/`);
    if (!response.ok) {
      throw new Error('Failed to retrieve text');
    }
  
    return response.json();
}