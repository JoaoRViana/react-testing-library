import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import render from './helper/render';
import App from '../App';

const strFav = 'Favorite Pokémon';
describe('', () => {
  it('Verifica os links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links[0].text).toBe('Home');
    expect(links[1].text).toBe('About');
    expect(links[2].text).toBe(strFav);
  });
  it('Verifica se redireciona para Home', () => {
    render(<App />);
    const home = screen.getByText('Home');
    userEvent.click(home);
    const text = screen.getByText('Encountered Pokémon');
    expect(text).toBeInTheDocument();
  });
  it('Verifica se redireciona para About', () => {
    render(<App />);
    const about = screen.getByText('About');
    userEvent.click(about);
    const text = screen.getByText('About Pokédex');
    expect(text).toBeInTheDocument();
  });
  it('Verifica se rediciona para Favorite Pokémon', () => {
    render(<App />);
    const fav = screen.getByText(strFav);
    userEvent.click(fav);
    const text = screen.getByRole('heading', { name: strFav, level: 2 });
    expect(text).toBeInTheDocument();
  });
});
