import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Quote, Iquote } from './Quote';

const quote: Iquote = {
    anime: 'Anime name',
    character: 'Character name',
    quote: 'Quote text',
    rate: 5
};

test('renders quote with all props', () => {
    render(<Quote {...quote} />);
    // const animeElement = screen.getByText(quote.anime!);
    const characterElement = screen.getByText(`${quote.character}, ${quote.anime}`);
    const quoteElement = screen.getByText(quote.quote!);
    const rateElement = screen.getByText(`Nota: ${quote.rate}`);

    //expect(animeElement).toBeInTheDocument();
    expect(characterElement).toBeInTheDocument();
    expect(quoteElement).toBeInTheDocument();
    expect(rateElement).toBeInTheDocument();
});