import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './button';
import React from 'react';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when the button is disabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the disabled attribute when disabled is true', () => {
    render(<Button label="Click Me" disabled />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  it('sets the correct type attribute', () => {
    render(<Button label="Submit" type="submit" />);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

});