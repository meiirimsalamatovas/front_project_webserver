import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';

describe('Item component', () => {
  const mockItem = {
    name: 'Gold Ring',
    description: 'Elegant and classic gold ring.',
    price: 299.99,
    image: 'gold-ring.jpg'
  };

  const mockAddToCart = jest.fn();

  beforeEach(() => {
    render(<Item item={mockItem} addToCart={mockAddToCart} />);
  });

  test('renders item details correctly', () => {
    expect(screen.getByText(/Gold Ring/i)).toBeInTheDocument();
    expect(screen.getByText(/Elegant and classic gold ring/i)).toBeInTheDocument();
    expect(screen.getByText(/\$299.99/i)).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img/gold-ring.jpg');
    expect(img).toHaveAttribute('alt', 'Gold Ring');
  });

  test('calls addToCart when + button is clicked', () => {
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);
    expect(mockAddToCart).toHaveBeenCalledWith(mockItem);
  });
});
