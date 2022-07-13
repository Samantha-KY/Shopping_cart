import axios from 'axios'
import {useState, useEffect} from 'react'

function UseFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
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

