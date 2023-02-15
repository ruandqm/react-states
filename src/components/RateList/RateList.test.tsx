import '@testing-library/jest-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import { RateList } from './RateList';
import { act } from 'react-dom/test-utils';

describe('RateList', () => {
    it('should sort and render quotes by rate', async () => {
        const mockRatedList = [
            { anime: 'Anime A', character: 'Character A', quote: 'Quote A', rate: 3 },
            { anime: 'Anime B', character: 'Character B', quote: 'Quote B', rate: 5 },
            { anime: 'Anime C', character: 'Character C', quote: 'Quote C', rate: 2 },
        ];

        await act(async () => {
            render(<RateList ratedList={mockRatedList} />);
        });

        const quotes = screen.getAllByTestId('quote');
        expect(quotes[0]).toHaveTextContent('Quote B');
        expect(quotes[1]).toHaveTextContent('Quote A');
        expect(quotes[2]).toHaveTextContent('Quote C');
    });
});