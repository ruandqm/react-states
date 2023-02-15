import '@testing-library/jest-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios'
import Welcome from './Welcome';

describe('Welcome component', () => {
    it('renders quote and rating buttons after clicking "Iniciar votação" button', async () => {
        const data = {
            anime: 'Naruto',
            character: 'Uzumaki Naruto',
            quote: 'I never go back on my word, because that’s my ninja way.',
        }
        vi.spyOn(axios, 'get').mockResolvedValueOnce({ data })

        render(<Welcome />)
        fireEvent.click(screen.getByText(/Iniciar votação/i))

        expect(axios.get).toHaveBeenCalledTimes(1) // verifies that the API was called once
        expect(axios.get).toHaveBeenCalledWith('https://animechan.vercel.app/api/random')
        await screen.findByText(/Naruto/i) // assumes that Quote component renders 'anime'
        expect(screen.getAllByRole('button')).toHaveLength(10) // assumes that RatingButtons component renders 5 buttons
    })
})
