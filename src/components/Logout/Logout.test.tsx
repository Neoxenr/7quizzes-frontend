import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../test';
import Logout from './Logout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Tests for Logout component', () => {
  it('Render is correct', () => {
    const { render } = renderWithProviders(<Logout />);

    expect(render.container.querySelector('.ant-btn')).toBeInTheDocument();
  });
});
