import React from 'react';
import { renderer } from '@testing-library/react';
import Nav from '../../components/Nav';

/**
 * @jest-environment jsdom
 */

describe('Nav', () => {
  it('renders correctly', () => {
    const screen = renderer
      .create(<Nav />)
      .toJSON();
    expect(screen).toMatchSnapshot();
  });
});
