import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test';
import Question from './Question';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }),
});

describe('Tests for Question component', () => {
  it('Render is correct', () => {
    renderWithProviders(
      <Question
        question={{
          questionId: 'd61bbe8e-e8da-11ec-8fea-0242ac120002',
          questionText: 'Test question',
          answersList: [
            {
              answerId: 'dde78fda-e8da-11ec-8fea-0242ac120002',
              answerText: 'Test answer',
            },
          ],
        }}
      />,
    );

    expect(screen.getByText('Test question')).toBeInTheDocument();
  });
});
