import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

      <div className="footer-section">
  <h3>Contact Information</h3>
  <p>Address: Zhandosova St., 1, Almaty</p>
  <p>Phone: +7 (123) 456-7890</p>
  <p>Email: support@jewelstore.kz</p>
</div>


        <div className="footer-section">
          <h3>Navigationt</h3>
          <ul>
            <li><a href="/" className="footer-link">Catalog</a></li>
            <li><a href="/cart" className="footer-link">Cart</a></li>
          </ul>
        </div>
      </div>



      <div className="footer-bottom">
        <p>&copy; 2025 Магазин украшений. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
