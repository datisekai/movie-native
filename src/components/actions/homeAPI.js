import axiosClient from "../axios/axiosClient";
import { API_KEY } from "../config";

const HomeAPI = {
  getTrending: async (page = 1) => {
    const dataTrend = await axiosClient.get(
      `/trending/all/day?api_key=${API_KEY}&page=${page}&language=vi`
    );

    return dataTrend.data;
  },
  getUpComing: async (page = 1) => {
    const dataUpComing = await axiosClient.get(
      `/movie/upcoming?api_key=${API_KEY}&page=${page}&language=en`
    );
    return dataUpComing.data;
  },
  getGenreMovie: async () => {
    const data = await axiosClient.get(
      `/genre/movie/list?api_key=${API_KEY}&language=en`
    );
    return data.data;
  },
};

export default HomeAPI;
