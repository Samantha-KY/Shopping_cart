import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import UseFetch from './data';
import { useState, useEffect} from 'react';
import ProductView from './components/Product_details';
import Buy from './components/Buy';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';


function App() {

  

  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div className="row">
      <Routes>
        <Route path='/' exact/>
        <Route path='/product' element={<Main/>}/>
        <Route path='/cart' element= {<Basket />}/>
        <Route path='/product/:id' element={<ProductView />}/>
        <Route path='/buy' element={<Buy />}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
