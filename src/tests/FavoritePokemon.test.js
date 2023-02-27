import { screen } from '@testing-library/react';
import render from './helper/render';
import { FavoritePokemon } from '../pages';

describe('', () => {
  const fakeChu = {
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: 'kg',
    },
    image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png',
  };
  it('verifica mensagem sem pokémon favorito', () => {
    render(<FavoritePokemon />);
    const text = screen.getByText('No favorite Pokémon found');
    expect(text).toBeInTheDocument(text);
  });
  it('verifica se retorna pokemon favoritado', () => {
    render(<FavoritePokemon pokemonList={ [fakeChu] } />);
    const text = screen.getByText('Pikachu');
    expect(text).toBeInTheDocument();
  });
});
