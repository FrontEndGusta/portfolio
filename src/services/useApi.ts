// useApi.js
import { useQuery } from "react-query";
import axios from "axios";

const useApi = <T>(endpoint: string) => {
  const { data, error, isLoading } = useQuery<T>(endpoint, async () => {
    // Simula um atraso de 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    try {
      const response = await axios.get<T>(
        `${process.env.REACT_APP_API_BASEURL}${endpoint}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      // Você pode tratar o erro aqui se necessário
      console.error("Erro na requisição:", error);
      throw error;
    }
  });

  return { data, error, isLoading };
};

export default useApi;
