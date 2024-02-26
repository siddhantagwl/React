import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// fc58e1e --> API key

const API_url = "http://www.omdbapi.com/?apikey=fc58e1e";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const resp = await fetch(`${API_url}&s=${title}`);
    const data = await resp.json();

    setMovies(data.Search);
  };

  // we want to get the API data as soon as the page loads so for that use the useEffect
  useEffect(() => {
    searchMovies("Avengers");
  }, []); // empty dependency array if we only want to call this at the start

  // this is JSX inside the return function
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {/* // weput a ? after movies to cehck if movies array is null or not  */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* // dynamic looping over movies array */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
