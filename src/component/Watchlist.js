import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      {watchlist.length > 0 ? (
        watchlist.map((movie) => <h5>{movie.title}</h5>)
      ) : (
        <h3>Here is no film!</h3>
      )}
    </>
  );
};

export default Watchlist;
