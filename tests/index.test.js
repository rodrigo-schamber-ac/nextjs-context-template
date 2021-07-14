import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ThemeProvider from '../contexts/ThemeContext/ThemeContext'
import ThemeContext from '../contexts/ThemeContext'
import ThemeConsumer from '../contexts/ThemeContext';
import { ThemeContextState } from '../contexts/ThemeContext/types'

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
 
test('ThemeConsumer shows default value', () => {
    render(<ThemeConsumer />)
    expect(screen.getByText(/^Dark/)).toHaveTextContent(
        'Dark',
    )
});