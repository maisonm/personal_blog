import React from 'react';
import { render } from '@testing-library/react';
import geah from './Page';

test('renders learn react link', () => {
  const { getByText } = render(<Page />);
  expect(linkElement).toBeInTheDocument();
});
