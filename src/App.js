import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Cart from "./components/Cart";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Silver Ring",
      price: 50,
      image: "silver ring.jpg",
      description: "Elegant sterling silver ring with a minimalist design.",
      category: "ring"
    },
    {
      id: 2,
      name: "Gold Earrings",
      price: 120,
      image: "Gold Earrings.webp",
      description: "Beautiful 18k gold earrings with diamond accents.",
      category: "earring"
    },
    {
      id: 3,
      name: "Gemstone Bracelet",
      price: 80,
      image: "Gemstone Bracelet.webp",
      description: "A delicate bracelet adorned with natural gemstones.",
      category: "bracelet"
    },
    {
      id: 4,
      name: "Pearl Necklace",
      price: 150,
      image: "Pearl Necklace.webp",
      description: "Classic pearl necklace with a silver clasp.",
      category: "necklace"
    },
    {
      id: 5,
      name: "Diamond Pendant",
      price: 200,
      image: "Diamond Pendant.jpg",
      description: "A sparkling diamond pendant set in white gold.",
      category: "necklace"
    },
    {
      id: 6,
      name: "Rose Gold Watch",
      price: 300,
      image: "Rose Gold Watch.png",
      description: "Stylish rose gold watch with a leather strap.",
      category: "bracelet"
    },
    {
      id: 7,
      name: "Platinum Wedding Band",
      price: 500,
      image: "Platinum Wedding Band.jpg",
      description: "Timeless platinum wedding band for a perfect occasion.",
      category: "ring"
    },
    {
      id: 8,
      name: "Emerald Brooch",
      price: 250,
      image: "Emerald Brooch.jpg",
      description: "Vintage brooch with a large emerald centerpiece.",
      category:"brooch"
    },
    {
      id: 9,
      name: "Sapphire Cufflinks",
      price: 180,
      image: "Sapphire Cufflinks.jpg",
      description: "Luxury sapphire cufflinks for formal occasions.",
      category: "brooch"
    },
    {
      id: 10,
      name: "Ruby Ankle Bracelet",
      price: 90,
      image: "Ruby Ankle Bracelet.jpg",
      description: "Charming ruby ankle bracelet with gold details.",
      category: "bracelet"
    },
    {
      id: 11,
      name: "Opal Necklace",
      price: 220,
      image: "Opal Necklace.jpg",
      description: "Beautiful opal necklace with gold chain.",
      category: "necklace"
    },
    {
      id: 12,
      name: "Citrine Earrings",
      price: 140,
      image: "Citrine Earrings.jpg",
      description: "Elegant citrine earrings with sterling silver setting.",
      category: "earring"
    },
    {
      id: 13,
      name: "Amethyst Bracelet",
      price: 85,
      image: "Amethyst Bracelet.jpg",
      description: "Handcrafted bracelet with amethyst beads.",
      category: "bracelet"
    },
    {
      id: 14,
      name: "Tourmaline Ring",
      price: 350,
      image: "Tourmaline Ring.jpg",
      description: "Exquisite ring with a large tourmaline stone.",
      category: "ring"
    },
    {
      id: 15,
      name: "Tanzanite Pendant",
      price: 180,
      image: "Tanzanite Pendant.jpg",
      description: "Tanzanite pendant with a silver chain.",
      category: "necklace"
    }
  ]);

  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemToRemove.id));
  };

  const filterItems = (category) => {
    setFilteredItems(category === "all" ? items : items.filter(item => item.category === category));
  };

  const filterBySearch = (query) => {
    setFilteredItems(
      items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const categories = ["all", "ring", "earring", "bracelet", "necklace", "brooch"];

  return (
    <Router>
      <div className="wrapper">
        <Header filterBySearch={filterBySearch} />

        <div className="main-container">
          <Sidebar categories={categories} filterItems={filterItems} />
          
          <Routes>
            <Route path="/" element={<Items items={filteredItems} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
