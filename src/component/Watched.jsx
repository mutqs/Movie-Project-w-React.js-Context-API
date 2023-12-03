import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCart from "./MovieCart";
const Watched = () => {
  const { watchedlist } = useContext(GlobalContext);
  return (
    <div className="movie-wrapper">
      {watchedlist?.length > 0 &&
        watchedlist.map((movie, index) => (
          <MovieCart movie={{ ...movie, index }} key={movie.id} />
        ))}
    </div>
  );
};

export default Watched;
