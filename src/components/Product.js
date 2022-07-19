import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product, onAddToCart } = props;
  return (
    <div key={product.id}>
      <Link to={`/product/${product.product_id}`}>
      <img className="small" src={product.image} alt={product.name} />
      </Link>
      <h3>{product.title}</h3>
      <div>RWF{product.price}</div>
      <div>
        <button onClick={() => onAddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
