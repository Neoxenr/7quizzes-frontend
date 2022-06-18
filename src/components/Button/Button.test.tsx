/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  act, fireEvent, render, screen,
} from '@testing-library/react';

import Button from './Button';

describe('Tests for button component', () => {
  it('Render is correct', () => {
    render(
      <Button
        onClick={() => {}}
        className=""
        disabled
        type="primary"
        htmlType="button"
      >
        test button
      </Button>,
    );

    expect(screen.getByText('test button')).toBeInTheDocument();
  });

  it('Callback is called when I clicked on button', () => {
    const mockOnClick = jest.fn();

    render(
      <Button
        className=""
        onClick={mockOnClick}
        disabled={false}
        htmlType="button"
        type="primary"
      >
        test button
      </Button>,
    );

    act(() => {
      fireEvent.click(screen.getByText('test button'));
    });

    expect(screen.getByText('test button')).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('Classname added to button', () => {
    const { container, getByText } = render(
      <Button
        className="button__test"
        onClick={() => {}}
        disabled={false}
        htmlType="button"
        type="primary"
      >
        test button
      </Button>,
    );

    expect(getByText('test button')).toBeInTheDocument();
    expect(container.getElementsByClassName('button__test').length).toBe(1);
  });

  it('Callback is not called when I clicked on disabled button', () => {
    const mockOnClick = jest.fn();

    render(
      <Button
        className=""
        onClick={mockOnClick}
        disabled
        htmlType="button"
        type="primary"
      >
        test button
      </Button>,
    );

    act(() => {
      fireEvent.click(screen.getByText('test button'));
    });

    expect(screen.getByText('test button')).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
