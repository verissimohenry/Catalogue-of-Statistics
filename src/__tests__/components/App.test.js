import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import App from '../../components/App';
import store from '../../store/store';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><App /></Provider>);
  expect(asFragment(<Provider store={store}><App /></Provider>)).toMatchSnapshot();
});
