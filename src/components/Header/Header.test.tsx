import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test';

import Header from './Header';
import { setVisibleButton } from '../../store/slices';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Tests for Header component', () => {
  it('Render is correct', () => {
    const { render } = renderWithProviders(<Header />);

    expect(render.container.querySelector('.header')).toBeInTheDocument();
  });

  it('Button showed when isVisibleButton equals true', () => {
    const { store } = renderWithProviders(<Header />);

    act(() => {
      store.dispatch(setVisibleButton(true));
    });

    const button: HTMLElement = screen.getByText('Game rules');

    expect(button).toBeInTheDocument();
  });
});
