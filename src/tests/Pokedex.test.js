import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import render from './helper/render';
import App from '../App';

describe('', () => {
  it('verifica h2', () => {
    render(<App />);
    const head = screen.getByRole('heading', { name: 'Encountered Pokémon', level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('verifica se próximo pokemon é renderizado', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Próximo Pokémon' });
    const fire = screen.getByRole('button', { name: 'Fire' });
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
    userEvent.click(fire);
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();
    userEvent.click(button);
    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeInTheDocument();
    userEvent.click(button);
    expect(charmander).toBeInTheDocument();
  });
  it('verifica botões', () => {
    render(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons.length).toEqual(7);
    const all = screen.getByRole('button', { name: 'All' });
    expect(all).toBeInTheDocument();
    const fire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(fire);
    userEvent.click(all);
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
