import React from 'react';
import { fireEvent, render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import { contextDefaultValues } from '../src/contexts/ThemeContext/ThemeProvider';
import ThemedHeader from '../src/components/ThemedHeader';
import {Theme} from '../src/types/types';

test('Test ThemeContext default values', () => {

    expect(contextDefaultValues.theme).toEqual(Theme.English);

    expect(contextDefaultValues.setTheme(Theme.English)).toBeUndefined();

});

test('Test switching theme', () => {
    render(<ThemedHeader />)
    
    fireEvent.click(screen.getByText('English'))
    expect(screen.getByText(Theme.Portuguese)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Portuguese'));
    expect(screen.getByText(Theme.English)).toBeInTheDocument();

});