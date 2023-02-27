import { screen } from '@testing-library/react';
import render from './helper/render';
import { NotFound } from '../pages';

describe('', () => {
  it('verifica h2', () => {
    render(<NotFound />);
    const head = screen.getByRole('heading', { name: 'Page requested not found', level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('verifica se o gif está correto', () => {
    render(<NotFound />);
    const img = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
