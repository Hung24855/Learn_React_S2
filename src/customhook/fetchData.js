import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    // Sử dụng một biến để kiểm tra trạng thái của thành phần
    let isMounted = true;
    //Cancel request
    // const ourRequest = axios.CancelToken.source(); // step 1

    const fetchData = async () => {
      try {
        // let res = await axios.get(url, {
        //   cancelToken: ourRequest.token, // <-- 2nd step
        // });
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        // Kiểm tra trạng thái của thành phần trước khi cập nhật trạng thái
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      // Đánh dấu thành phần đã bị hủy bỏ
      isMounted = false;
      //ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
    };
  }, [url]);

  return {
    Data,
    loading,
    isError,
  };
};

export default useFetchData;
