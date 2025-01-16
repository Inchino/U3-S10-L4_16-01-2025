import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import BookList from '../components/BookList';

describe('BookList Component with dynamic data', () => {
    it('renders the correct number of cards for any given array', () => {
        const testBooks = Array.from({ length: Math.floor(Math.random() * 1000) + 1 }, (_, index) => ({
            id: index + 1, // ID univoco
            title: `Libro ${index + 1}`,
            description: `Descrizione del libro ${index + 1}`,
          }));
  
      render(<BookList books={testBooks} />);

      const cards = screen.getAllByRole('book');
  
      expect(cards.length).toBe(testBooks.length);
    });
  });
  