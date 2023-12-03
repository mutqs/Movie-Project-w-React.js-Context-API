import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({ movie }) => {
  const { addMovieToList } = useContext(GlobalContext);
  const [imdbRank, setImdbRank] = useState("");
  const customizeAndSendMovie = (movie, type) => {
    let customMovie = {
      ...movie,
      type: type,
      vote_average: imdbRank,
    };
    addMovieToList(customMovie);
  };
  const minimalizeImbdRank = () => {
    let customRank;
    if (movie?.vote_average.toString().length >= 3) {
      customRank =
        movie.vote_average.toString().split(".")[0] +
        "." +
        movie.vote_average.toString().split(".")[1][0];
      return setImdbRank(customRank);
    }
    return setImdbRank(movie?.vote_average);
  };
  useEffect(() => {
    minimalizeImbdRank();
  }, []);

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
          <h4 className="imdb-rank">
            IMDB: <b>{imdbRank ? imdbRank : movie?.vote_average}</b>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => customizeAndSendMovie(movie, "watchlist")}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            onClick={() => customizeAndSendMovie(movie, "watched")}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
