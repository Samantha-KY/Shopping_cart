import React,{useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from '../helpers/getProductById';

 function ProductView () {  

  const params=useParams()
  const [user, setUser] = React.useState([])
  const {data} = UseFetch(`https://first-shopping-cart-api.herokuapp.com/products/${params.id}`);

  console.log(data?.data, "=====");

  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.product_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.product_id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems]);

  React.useEffect(() => {
     if (data !== [] ){
      setUser(data);
     }
  },[user])
     
      return (
        <>
       {
       user && <div key={data?.data?.product_id}>
      <img className="small" src={data?.data?.image} alt={data?.data?.name} />
      <h3>Name: {data?.data?.name}</h3>
      {/* <h3>Description: {data.description}</h3> */}
      {/* <h3>category: {data.category}</h3> */}
      <div>RWF: {data?.data?.price}</div>
      <div>
        <Link to='/product'>
        <button >Back home</button>
        </Link>
        <button onClick={()=> onAdd(data?.data)}>AddToCart</button>
        <Link to='/buy'>
        <button >Buy Product</button>
        </Link>
      </div>
    </div>
    }
    </>
      );
    }

  

  export default ProductView;





