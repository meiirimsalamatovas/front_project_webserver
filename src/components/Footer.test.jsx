import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText(/Contact Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Zhandosova St., 1, Almaty/i)).toBeInTheDocument();
    expect(screen.getByText(/\+7 \(123\) 456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/support@jewelstore.kz/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });

  test('renders footer bottom text', () => {
    render(<Footer />);
    expect(screen.getByText(/2025 Магазин украшений/i)).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Footer />);
    expect(screen.getByText(/Catalog/i).closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText(/Cart/i).closest('a')).toHaveAttribute('href', '/cart');
  });
});
