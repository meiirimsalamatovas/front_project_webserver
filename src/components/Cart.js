export default function Cart({ cart, removeFromCart }) {
    return (
      <div className="cart-container"> 
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="item">
              <img src={`/img/${item.image}`} alt={item.name} />
              <h2>{item.name}</h2>
              <b>{item.price}$</b>
              <p>{item.description}</p>
              <div className="add-to-cart" onClick={() => removeFromCart(item)}>Remove</div>
            </div>
          ))
        )}
      </div>
    );
}
