import React, { useEffect, useState } from "react";
import ResultCart from "./ResultCart";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGI1ZjA4OTIwODc1YTkyOWEzOTRkNWY3MjJmN2Q4MiIsInN1YiI6IjYyM2RjNmQ2ZDdkY2QyMDA0OTMyZDQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3BjiecwzSKmSJjDcteke5vNQbIxkuO4PUOPqcYT6J8",
    },
  };

  function onChange(e) {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        !response.error ? setResults(response.results) : setResults([]);
        console.log(response);
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search a movie or tv serie..."
            />
          </div>
        </div>
        {results.length > 0 && (
          <ul>
            {results.map((movie) => (
              //   <li key={movie.id}>{movie.title}</li>
              <ResultCart key={movie.id} movie={movie} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Add;
