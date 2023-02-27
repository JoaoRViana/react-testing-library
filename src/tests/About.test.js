import { screen } from '@testing-library/react';
import render from './helper/render';
import { About } from '../pages';

describe('', () => {
  it('verifica se contém um heading', () => {
    render(<About />);
    const head = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('verifica se a img está correta', () => {
    render(<About />);
    const img = screen.getByAltText('Pokédex');
    console.log(img);
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
