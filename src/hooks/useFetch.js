import React, { useEffect, useRef, useState } from "react";

const useFetch = (endPointUrl) => {
  const [data, setData] = useState({
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prevData) => {
          return { ...prevData, loading: true };
        });
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}${endPointUrl}`
        );
        const result = await response.json();
        setData((prevData) => {
          return { ...prevData, data: result, loading: false };
        });
      } catch (error) {
        setData({ loading: false, data: null, error: error });
      }
    };
    fetchData();
  }, []);
  return data;
};

export default useFetch;
