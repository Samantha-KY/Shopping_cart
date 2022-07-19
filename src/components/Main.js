import React from 'react';
import Product from './Product';
// import UseFetch from '../data';
import axioss from '../data';
import { useState, useEffect} from 'react';

export default function Main(props) {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });

  const {data} =axioss.getProduct("https://first-shopping-cart-api.herokuapp.com/products");

  const onAddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems]);
  console.log(data?.data,"........");
  return (
    <main >
      <h2>Products</h2>
      <div className="row center col-2">
        {data?.data?.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart}></Product>
        ))}
      </div>
    </main>
  );
}
