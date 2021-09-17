import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { JSDOM } from 'jsdom';
import Meal from '../../components/Meal';

afterEach(cleanup);
it('displays heading', () => {
  const { store } = new JSDOM();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Meal
          id="005784"
          name="Test"
          image="https://via.placeholder.com/150"
          key="005784"
        />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText('Test')).toBeTruthy();
});
