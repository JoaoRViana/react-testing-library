import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import render from './helper/render';
import App from '../App';

describe('', () => {
  it('verifica se rederiza os dados do pokemon', () => {
    render(<App />);
    const url = screen.getByText('More details');
    userEvent.click(url);
    const pokeName = screen.getByText('Pikachu');
    expect(pokeName).toBeInTheDocument();
    const head = screen.getByRole('heading', { name: 'Pikachu Details', level: 2 });
    expect(head).toBeInTheDocument();
    const pokeType = screen.getByText('Electric');
    expect(pokeType).toBeInTheDocument();
    const pokePeso = screen.getByText('Average weight: 6.0 kg');
    expect(pokePeso).toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: 'Summary', level: 2 });
    expect(summary).toBeInTheDocument();
    const description = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(description).toBeInTheDocument();
    const locationText = screen.getByRole('heading', { name: 'Game Locations of Pikachu', level: 2 });
    expect(locationText).toBeInTheDocument();
    const imgLocation = screen.getAllByAltText('Pikachu location');
    expect(imgLocation[0]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  it('verifica checkbox', () => {
    render(<App />);
    const url = screen.getByText('More details');
    userEvent.click(url);
    const checkbox = screen.getByRole('checkbox', { checked: false });
    userEvent.click(checkbox);
    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(star).not.toBeInTheDocument();
    const labelText = screen.getByText('Pokémon favoritado?');
    expect(labelText).toBeInTheDocument();
  });
});
