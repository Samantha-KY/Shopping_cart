import axios from 'axios'
import {useState, useEffect} from 'react'

// function UseFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

function getProduct () {
  useEffect((url) => {
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

  function createProduct (){
  useEffect((url) => {
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

  function getProductById () {
  useEffect((url) => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'GET',
      'Content-Type': 'application/json',
    }}, {params: { id: product_id}})
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

  function updateProductById (){
  useEffect((url) => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'PATCH',
      'Content-Type': 'application/json',
    }}, {params: { id: product_id}})
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

  function deleteProductById () {
  useEffect((url) => {
    axios.get(url, {headers:{
      'Access-Control-Allow-Origin': 'DELETE',
      'Content-Type': 'application/json',
    }}, {params: { id: product_id}})
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

