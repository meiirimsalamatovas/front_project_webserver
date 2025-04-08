
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Sidebar = ({ categories, filterItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        <IoMdMenu size={30} />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <IoMdClose size={30} />
        </button>
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => { 
              filterItems(category); 
              setIsOpen(false); 
            }}>
              {category}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
