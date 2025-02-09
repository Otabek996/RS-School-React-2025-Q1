import Card from '../components/Card';
import { render, screen } from '@testing-library/react';
import { getStatusColor } from '../utils/statusColor';
import '@testing-library/jest-dom';

jest.mock('../utils/statusColor', () => ({
  getStatusColor: jest.fn(() => 'default'),
}));

describe('Card Component', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://example.com/rick.png',
    species: 'Human',
    status: 'Alive',
  };

  test('renders character name', () => {
    render(<Card character={character} />);
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  test('renders character species', () => {
    render(<Card character={character} />);
    expect(screen.getByText('Human')).toBeInTheDocument();
  });

  test('renders character image', () => {
    render(<Card character={character} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', character.image);
    expect(image).toHaveAttribute('alt', character.name);
  });

  test('renders character status chip with correct color', () => {
    render(<Card character={character} />);
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(getStatusColor).toHaveBeenCalledWith(character.status);
  });
});
