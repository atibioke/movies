// src/hooks/useMovieSearch.ts
import { useState } from 'react';
import { searchMovies } from '../api.ts';

export const useMovieSearch = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      setMovies(data.results || []);
    } catch (error) {
      setError('An error occurred while fetching the movies.');
    } finally {
      setLoading(false);
    }
  };

  return { movies, fetchMovies, loading, error };
};
