import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CommentArea from '../components/CommentArea';

describe('CommentArea Component', () => {
    it('renders the loading state correctly', () => {
      render(<CommentArea />);

      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })
})