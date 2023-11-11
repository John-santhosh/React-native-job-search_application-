import { useEffect, useState } from "react";
import axios from "axios";

// import { RAPID_API_KEY } from "@env";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(RAPID_API_KEY);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      // query: "Python developer in Texas, USA",
      // page: "1",
      // num_pages: "1",
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "RAPID_API_KEY",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      // console.log({ response });
      setData(response.data.data);
    } catch (error) {
      // console.log(error);
      setError(error.message);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { refetch, isLoading, error, data };
};

export default useFetch;
