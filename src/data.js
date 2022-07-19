import axios from 'axios'
import {useState, useEffect} from 'react'

// function UseFetch(url) {
    
  

function getProduct (url) {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'GET',
      'Content-Type': 'application/json',
    }})
    .then((response) => {
        setData(response.data);
    })
    .catch((err)=> {
        setError(err);
    }) 
    .finally(() => {
        setLoading(false);
    })
  }, [url]);
  return {data, loading, error};
}

  function createProduct (url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'POST',
      'Content-Type': 'application/json',
    }})
    .then((response) => {
        setData(response.data);
    })
    .catch((err)=> {
        setError(err);
    }) 
    .finally(() => {
        setLoading(false);
    })
  }, [url]);
  return {data, loading, error};  
}

  function getProductById (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'GET',
      'Content-Type': 'application/json',
    }}, {params: { product_id: product_id}})
    .then((response) => {
        setData(response.data);
    })
    .catch((err)=> {
        setError(err);
    }) 
    .finally(() => {
        setLoading(false);
    })
  }, [url]);
  return {data, loading, error};  
}

  function updateProductById (url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'PATCH',
      'Content-Type': 'application/json',
    }}, {params: { product_id: product_id}})
    .then((response) => {
        setData(response.data);
    })
    .catch((err)=> {
        setError(err);
    }) 
    .finally(() => {
        setLoading(false);
    })
  }, [url]);
  return {data, loading, error};
  }

  function deleteProductById (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  useEffect((url) => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'DELETE',
      'Content-Type': 'application/json',
    }}, {params: { product_id: product_id}})
    .then((response) => {
        setData(response.data);
    })
    .catch((err)=> {
        setError(err);
    }) 
    .finally(() => {
        setLoading(false);
    })
  }, [url]);
  return {data, loading, error};
  }

export default{
  getProduct,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById
}

