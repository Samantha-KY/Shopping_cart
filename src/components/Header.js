import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];});useEffect(() => {localStorage.setItem('cartItems', JSON.stringify(cartItems))}, [cartItems]);
  return (
    <header className="block row center">
      <div>
        <Link to='/product'>
          <h1>Small Shopping Cart</h1>
        </Link>
      </div>
      <div>
        <Link to='/cart'>
          Cart{' '}
          {cartItems.length ? (
            <button className="badge">{cartItems.length}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        <Link to='/product'> Products</Link>
      </div>
    </header>
  );
}
