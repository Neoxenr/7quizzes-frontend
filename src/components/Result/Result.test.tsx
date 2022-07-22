import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Result from './Result';

describe('Tests for Result component', () => {
  it('Render is correct', () => {
    render(<Result />);

    expect(screen.getByText('Game finished')).toBeInTheDocument();
  });
});
