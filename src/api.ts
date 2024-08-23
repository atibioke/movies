import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';


export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: '655fa7547335b20159b37655be96e168',
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};





export const fetchAllMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/all/day`, {
        params: {
          api_key: '655fa7547335b20159b37655be96e168',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movies');
    }
  };


