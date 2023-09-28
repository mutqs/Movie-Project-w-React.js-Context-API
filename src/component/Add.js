import React, { useState } from "react";
import ResultCart from "./ResultCart";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGJkZjlkMDhkZDczM2YxY2E3MmRjNTA1OWExMmM0NSIsInN1YiI6IjYyM2RjNmQ2ZDdkY2QyMDA0OTMyZDQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UOObT8FqSflsZlY8nH0OBCIkEpWh31FGPCzO3JQdRJk",
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
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />{" "}
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Film , dizi , kişi ara..."
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
