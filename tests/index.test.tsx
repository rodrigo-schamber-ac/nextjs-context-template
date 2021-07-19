import React from 'react';
import { fireEvent, render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import ThemedHeader from '../src/components/ThemedHeader';
import {Theme} from '../src/types/types';

test('ThemedHeader shows default value', () => {
    render(<ThemedHeader />)
    expect(screen.getByText(Theme.English)).toBeInTheDocument();
});

test('ThemedHeader value is switched to', () => {
    render(<ThemedHeader />)
    
    fireEvent.click(screen.getByText('English'))
    expect(screen.getByText(Theme.Portuguese)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Portuguese'));
    expect(screen.getByText(Theme.English)).toBeInTheDocument();

});