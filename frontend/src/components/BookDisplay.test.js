import {render, screen} from '@testing-library/react';
import BookDisplay from './BookDisplay';
import '@testing-library/jest-dom';
import React from 'react';



test('renders book title and author', () => {
    render(<BookDisplay title="The Great Gatsby" author="F. Scott Fitzgerald"/>);
    const titleElement = screen.getByText(/The Great Gatsby by F. Scott Fitzgerald/i);
    expect(titleElement).toBeInTheDocument();
});


