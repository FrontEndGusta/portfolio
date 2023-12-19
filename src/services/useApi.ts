// useApi.js
import { useQuery } from "react-query";
import axios from "axios";

const useApi = <T>(endpoint: string) => {
  const { data, error, isLoading } = useQuery<T>(endpoint, async () => {
    const response = await axios.get<T>(
      `${process.env.REACT_APP_API_BASEURL}${endpoint}`
    );
    return response.data;
  });

  return { data, error, isLoading };
};

export default useApi;
