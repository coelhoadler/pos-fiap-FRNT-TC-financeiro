import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Title from './title';
import React from 'react';

describe('Title Component', () => {
    it('renders the title with the correct text', () => {
        render(<Title text="Test Title" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('applies the correct size class based on the size prop', () => {
        render(<Title text="Small Title" size="small" />);
        const title = screen.getByText('Small Title');
        expect(title).toHaveClass('text-sm');

        render(<Title text="Large Title" size="large" />);
        const largeTitle = screen.getByText('Large Title');
        expect(largeTitle).toHaveClass('text-lg');
    });

    it('applies the primary class when primary is true', () => {
        render(<Title text="Primary Title" primary />);
        const title = screen.getByText('Primary Title');
        expect(title).toHaveClass('font-bold');
    });

    it('applies additional classes from otherClasses', () => {
        render(<Title text="Custom Classes" otherClasses={['custom-class']} />);
        const title = screen.getByText('Custom Classes');
        expect(title).toHaveClass('custom-class');
    });

    it('sets the correct htmlFor attribute based on titleForID', () => {
        render(<Title text="Label Title" titleForID="test-id" />);
        const title = screen.getByText('Label Title');
        expect(title).toHaveAttribute('for', 'test-id');
    });
});