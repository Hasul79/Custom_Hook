import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(info => setData(info))
},[])
return [data];
}

export default useFetch;