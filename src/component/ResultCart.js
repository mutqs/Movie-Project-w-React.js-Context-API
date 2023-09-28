import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({ movie }) => {
  //   console.log(movie);
  const { addMovieToWatchlist } = useContext(GlobalContext);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls">
          <button className="btn" onClick={() => addMovieToWatchlist(movie)}>
            Add to Watchlist
          </button>
          <button className="btn">Add to Watched</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
