import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [url]);

  return {
    Data,
    loading,
    isError,
  };
};

export default useFetchData;
