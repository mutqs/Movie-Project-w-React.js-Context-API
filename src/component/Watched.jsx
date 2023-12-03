import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCart from "./MovieCart";
const Watched = () => {
  const { watchedlist } = useContext(GlobalContext);
  useEffect(() => {
    console.log("watchedlist", watchedlist);
  }, []);

  return (
    <div className="movie-wrapper">
      {watchedlist?.length > 0 &&
        watchedlist.map((movie, index) => (
          <MovieCart movie={{ ...movie, index }} key={index} />
        ))}
    </div>
  );
};

export default Watched;
