/* eslint-disable no-unused-vars */
import axios from 'axios';

const { expect } = require('chai');
const { JSDOM } = require('jsdom');

describe('api data', () => {
  it('Tests if recipes  data recived', async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=Seafood').then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });
});
