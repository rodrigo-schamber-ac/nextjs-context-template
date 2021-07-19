import React, { FC, ReactElement } from 'react';
import { fireEvent, render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import ThemeContext from '../src/contexts/ThemeContext';
import ThemeProvider from '../src/contexts/ThemeContext/ThemeProvider';
import ThemedHeader, {switchTheme} from '../src/components/ThemedHeader';

test('ThemedHeader shows default value', () => {
    render(<ThemedHeader />)
    expect(screen.getByText(/^English/)).toHaveTextContent(
      'English'
    );
});

test('ThemedHeader value is switched to Portuguese', () => {
    render(<ThemedHeader />)
    fireEvent.click(screen.getByText('English'))
    expect(screen.getByText(/^Portuguese/)).toHaveTextContent(
      'Portuguese'
    );
});