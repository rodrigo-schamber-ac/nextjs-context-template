import React, { FC, ReactElement } from 'react';
import { render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import { ThemeConsumer } from '../contexts/ThemeContext';
import ThemeContext from '../contexts/ThemeContext';
import ThemeProvider from '../contexts/ThemeContext/ThemeProvider';

test('ThemeConsumer shows default value', () => {
    render(<ThemeConsumer />)
    expect(screen.getByText(/^English/)).toHaveTextContent(
      'English'
    );
});