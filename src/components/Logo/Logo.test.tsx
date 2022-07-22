import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Tests for Logo component', () => {
  it('Render is correct', () => {
    render(<Logo />);

    expect(screen.getByAltText('7quizzes logo')).toBeInTheDocument();
  });
});
