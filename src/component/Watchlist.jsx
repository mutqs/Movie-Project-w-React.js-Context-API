import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCart from "./MovieCart";
const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-wrapper">
      {watchlist.length > 0 &&
        watchlist.map((movie, index) => (
          <MovieCart movie={{ ...movie, index }} key={movie.id} />
        ))}
    </div>
  );
};

export default Watchlist;
