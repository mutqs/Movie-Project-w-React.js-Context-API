import { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchlist = (movie) => {
    var isInclude = state.watchlist.some((x) => {
      return x.id === movie.id;
    });

    // let selectedCoupon = this.filteredCoupons.find(   !!!!!
    //     (coupon) => coupon.misliTicketId === ticketId
    //   )
    if (state.watchlist.length > 0) {
      if (!isInclude) {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
        return;
      }
    } else {
      dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }
  };
  return (
    <GlobalContext.Provider
      value={{ addMovieToWatchlist, watchlist: state.watchlist }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
