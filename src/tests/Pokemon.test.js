import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import render from './helper/render';
import App from '../App';
import { FavoritePokemon } from '../pages';

describe('', () => {
  const fakeChu = {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png',
  };
  it('verifica se rederiza informações do pokemon', () => {
    render(<App />);
    const pokeName = screen.getByText('Pikachu');
    expect(pokeName).toBeInTheDocument();
    const peso = screen.getByText('Average weight: 6.0 kg');
    expect(peso).toBeInTheDocument();
    const pokeType = screen.getByTestId('pokemon-type');
    expect(pokeType).toHaveTextContent('Electric');
    const link = screen.getByText('More details');
    expect(link).toHaveAttribute('href', '/pokemon/25');
    const img = screen.getByAltText('Pikachu sprite');
    expect(img).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });
  it('verifica favorito', () => {
    render(<App />);
    render(<FavoritePokemon pokemonList={ [fakeChu] } />);
    const home = screen.getByText('Home');
    userEvent.click(home);
    const favIcon = screen.getByAltText('Pikachu is marked as favorite');
    expect(favIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
