import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const MovieCart = ({ movie }) => {
  const { deleteMovieFromList } = useContext(GlobalContext);
  const [imdbRank, setImdbRank] = useState("");
  const [deleteType, setDeleteType] = useState("");
  const location = useLocation();
  const deleteMovie = (movie) => {
    let customMovie = {
      ...movie,
      deleteType: deleteType,
    };
    deleteMovieFromList(customMovie);
    console.log("deleteType", deleteType);
  };
  const minimalizeImbdRank = () => {
    let customRank;
    if (movie?.vote_average.toString().length >= 3) {
      customRank =
        movie.vote_average.toString().split(".")[0] +
        "." +
        movie.vote_average.toString().split(".")[1][0]; // toFixed
      return setImdbRank(customRank);
      // console.log("typeOf customRank", typeof movie?.vote_average);
    }
    console.log("sahdgasjdlklasş", movie?.vote_average);
    return setImdbRank(movie?.vote_average);
  };
  useEffect(() => {
    minimalizeImbdRank();
    let locType = location.pathname.includes("watched");
    // console.log("locType", locType);
    if (locType) {
      return setDeleteType("watched");
    }
    return setDeleteType("watchlist");
  }, []);
  return (
    <div className="cart-wrapper">
      <h2 className="title">
        <span>{movie.index + 1}</span>
        <span>Title : {movie.title}</span>
      </h2>
      <div className="date">Released Date : {movie.release_date}</div>
      <div className="imdb-rank">
        IMDB: <b>{imdbRank ? imdbRank : "-"}</b>
      </div>
      <p className="overview">Overview : {movie.overview}</p>
      <div onClick={() => deleteMovie(movie)} className="deleteMovie">
        Delete
      </div>
    </div>
  );
};

export default MovieCart;
