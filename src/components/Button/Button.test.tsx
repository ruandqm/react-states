import '@testing-library/jest-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('should render a button with given text', () => {
        render(<Button text="Click me!" style="my-button" />);
        const button = screen.getByText('Click me!');
        expect(button).toBeInTheDocument();
    });

    test('should call the action when clicked', () => {
        const mockFn = vi.fn();
        render(<Button text="Click me!" style="my-button" action={mockFn} />);
        const button = screen.getByText('Click me!');
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalled();
    });
});
