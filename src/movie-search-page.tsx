
import React, { useEffect, useState } from 'react';
import { useMovieSearch } from './hooks/useMovieSearch.ts';
import {getAllMovies} from './hooks/getAllMovies.ts'


const MovieSearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { movies, fetchMovies, loading, error } = useMovieSearch();
  const { allMovies, fetchAllMoviesFn , loadingAllMovies, errorLoadingAllMovies } = getAllMovies()

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchMovies(query);
    }
  };

  useEffect(()=>{
    fetchAllMoviesFn()
    
    fetchMovies("war");
  }, [])

  console.log(movies, "movies", allMovies);
  

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {allMovies.length > 0 && (
        //   <ul>
        //     {allMovies.map((movie) => (
        //       <li key={movie.id}>{movie.title}</li>
        //     ))}
        //   </ul>

 <div className="h-full flex w-full justify-center items-center dark:bg-gray-800 p-2">

<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">


   {allMovies.map((movie) => ( <div key={movie.title}
        className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
        <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
            24
        </div>
        <div className="p-2 flex justify-center">
            <a href="#">
                <img className="rounded-md"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path} `}
                loading="lazy" />
            </a>
        </div>

        <div className="px-4 pb-3">
            <div>
                <a href="#">
                    <h5
                        className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      {movie.title}
                    </h5>
                </a>

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                    A card component 
                </p>
            </div>
        </div>

    </div>))}

  

 



     
    </div>

</div>




        )}
      </div>
    </div>
  );
};



export default MovieSearchPage;
