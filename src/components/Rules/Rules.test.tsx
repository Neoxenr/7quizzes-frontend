/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Rules from './Rules';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }),
});

describe('Tests for Rules component', () => {
  it('Render is correct', () => {
    const { container } = render(
      <Rules
        rules={[
          {
            ruleId: 'e8a7eca2-e8e5-11ec-8fea-0242ac120002',
            ruleText: 'rule test',
          },
        ]}
      />,
    );

    expect(container.querySelector('.rules')).toBeInTheDocument();
  });
});
