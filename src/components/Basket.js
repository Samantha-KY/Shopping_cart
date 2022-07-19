import React,{useEffect, useState} from 'react';

export default function Basket() {

  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  const onAddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.product_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.product_id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemoveToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.product_id);
    if (exist.qty !== 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.product_id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.product_id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };

  const onSubToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.product_id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.product_id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.product_id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems]);
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="center">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.product_id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemoveToCart(item)} className="remove">
                Remove
              </button>{' '}
              <button onClick={() => onAddToCart(item)} className="add">
                +
              </button>
              <button onClick={() => onSubToCart(item)} className="add">
                -
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x RWF{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">RWF{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">RWF{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                RWF{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>RWF{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('your payment will be '+totalPrice+' RWF')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
