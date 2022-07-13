// import Header from './components/Header';
// import Main from './components/Main';
// import Basket from './components/Basket';
// import UseFetch from './data';
// import { useState, useEffect} from 'react';
// import ProductView from './components/Product_details';
// import Buy from './components/Buy';

// import PageNotFound from './components/PageNotFound';


// function Pages() {

//   const [cartItems, setCartItems] = useState(() => {
//     const localData = localStorage.getItem('cartItems');
//     return localData ? JSON.parse(localData) : [];
//   });

//   const {data} = UseFetch("https://fakestoreapi.com/products");

//   const onAdd = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };
//   const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty !== 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
//     }
//   };

//   const onSub = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems))
//   }, [cartItems]);

//   return (
    
//     <div className="App">
//       <Header countCartItems={cartItems.length}></Header>
//       <div className="row">
      
        
//         <Main data={data} onAdd={onAdd}/>
//         <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onSub={onSub}/>
//         <ProductView onAdd={onAdd}/>
//         <Buy cartItems={cartItems}/>
//         <PageNotFound/>
      
//       </div>
//     </div>
    
//   );
// }

// export default Pages;
