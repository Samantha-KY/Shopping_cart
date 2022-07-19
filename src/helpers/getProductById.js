import axios from 'axios'
import {useState, useEffect} from 'react'

function UseFetch(url, product_id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
  useEffect(() => {
    axios.get(url, null,{params: {product_id}},
        {headers:{
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }} )
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

export default UseFetch;

