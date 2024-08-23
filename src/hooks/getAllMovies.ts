// src/hooks/useMovieSearch.ts
import { useState } from 'react';
import { fetchAllMovies } from '../api.ts';

export const getAllMovies = () => {
  const [allMovies, setAllMovies] = useState<any[]>([]);
  const [loadingAllMovies, setLoadingAllMovies] = useState<boolean>(false);
  const [errorLoadingAllMovies, setErrorLoadingAllMovies] = useState<string | null>(null);

  const fetchAllMoviesFn = async () => {
    setLoadingAllMovies(true);
    setErrorLoadingAllMovies(null);
    try {
      const data = await fetchAllMovies();
      setAllMovies(data?.results || []);
    } catch (error) {
        setErrorLoadingAllMovies('An error occurred while fetching the movies.');
    } finally {
        setLoadingAllMovies(false);                                                                                        
    }
  };

  return { allMovies, fetchAllMoviesFn, loadingAllMovies, errorLoadingAllMovies };
};
