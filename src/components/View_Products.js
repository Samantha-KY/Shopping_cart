import React from 'react';
import data from '../data';
// import Product from './Product';
import Product_details from './Product_details';

export default function ViewProducts(props) {
//   const { products } = props;
  const {products} = data;
  return (
    <main className="block col-2">
      <div className="row">
        {products.map((product) => (
          <Product_details key={product.id} product={product} ></Product_details>
        ))}
      </div>
    </main>
  );
}
