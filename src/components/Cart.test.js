import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  const mockRemove = jest.fn();

  test("renders empty cart message", () => {
    render(<Cart cart={[]} removeFromCart={mockRemove} />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test("renders cart items", () => {
    const cartItems = [
      { id: 1, name: "Item 1", price: 10, description: "Desc", image: "item1.jpg" },
    ];
    render(<Cart cart={cartItems} removeFromCart={mockRemove} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Desc")).toBeInTheDocument();
  });

  test("removes item from cart", () => {
    const cartItems = [
      { id: 2, name: "Item 2", price: 20, description: "Desc 2", image: "item2.jpg" },
    ];
    render(<Cart cart={cartItems} removeFromCart={mockRemove} />);
    fireEvent.click(screen.getByText("Remove"));
    expect(mockRemove).toHaveBeenCalledWith(cartItems[0]);
  });

  test("submits the order form", () => {
    const cartItems = [
      { id: 3, name: "Item 3", price: 30, description: "Desc 3", image: "item3.jpg" },
    ];
    render(<Cart cart={cartItems} removeFromCart={mockRemove} />);
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Salamat", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "salamat@example.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Delivery Address"), {
      target: { value: "Astana", name: "address" },
    });

    fireEvent.click(screen.getByText("Place Order"));
    expect(screen.getByPlaceholderText("Your Name").value).toBe("Salamat");
  });
});
