import React, { FC, ReactElement } from 'react';
import { render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import ThemeContext from '../contexts/ThemeContext';
import ThemeProvider from '../contexts/ThemeContext/ThemeProvider';
import ThemedHeader, {switchTheme} from '../components/ThemedHeader';

test('ThemedHeader shows default value', () => {
    render(<ThemedHeader />)
    expect(screen.getByText(/^English/)).toHaveTextContent(
      'English'
    );
});