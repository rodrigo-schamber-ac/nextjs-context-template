import React from 'react';
import { fireEvent, render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import ThemedHeader from '../src/components/ThemedHeader';

test('ThemedHeader shows default value', () => {
    render(<ThemedHeader />)
    expect(screen.getByText(/^English/)).toBeInTheDocument();
});

test('ThemedHeader value is switched to Portuguese', () => {
    render(<ThemedHeader />)
    
    fireEvent.click(screen.getByText('English'))
    expect(screen.getByText(/^Portuguese/)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Portuguese'));
    expect(screen.getByText(/^English/)).toBeInTheDocument();

});