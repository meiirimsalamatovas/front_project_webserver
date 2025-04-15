import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header component', () => {
  test('renders logo, search input, and navigation links', () => {
    renderWithRouter(<Header filterBySearch={jest.fn()} />);

    expect(screen.getByText(/Jewelry Store/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search for jewelry/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /all jewelry \/ home page/i })).toBeInTheDocument();
    expect(screen.getByTitle(/Basket for storing goods/i)).toBeInTheDocument();
  });

  test('updates search input value on change', () => {
    renderWithRouter(<Header filterBySearch={jest.fn()} />);

    const input = screen.getByPlaceholderText(/Search for jewelry/i);
    fireEvent.change(input, { target: { value: 'ring' } });

    expect(input.value).toBe('ring');
  });

  test('calls filterBySearch with input value on form submit', () => {
    const mockFilter = jest.fn();
    renderWithRouter(<Header filterBySearch={mockFilter} />);

    const input = screen.getByPlaceholderText(/Search for jewelry/i);
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'bracelet' } });
    fireEvent.click(button);

    expect(mockFilter).toHaveBeenCalledWith('bracelet');
  });
});
