import Header from './pages/Header';
import Main from './pages/Main';
import Basket from './pages/Basket';
import UseFetch from './helpers/getProducts';
import { useState, useEffect} from 'react';
import ProductView from './pages/Product_details';
import Buy from './pages/Buy';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import {QueryClientProvider, QueryClient} from 'react-query';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
