import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: [],
  watchedlist: [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToList = (movie) => {
    if (movie.type === "watchlist") {
      let isInclude = state.watchlist.some((x) => {
        return x.id === movie.id;
      });
      console.log("movie", movie);
      if (state.watchlist.length > 0) {
        if (!isInclude) {
          dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
          return;
        }
      } else {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
      }
    } else {
      let isInclude = state.watchedlist.some((x) => {
        return x.id === movie.id;
      });
      // console.log("movie", movie);
      if (state.watchlist.length > 0) {
        if (!isInclude) {
          dispatch({ type: "ADD_MOVIE_TO_WATCHEDLIST", payload: movie });
          return;
        }
      } else {
        dispatch({ type: "ADD_MOVIE_TO_WATCHEDLIST", payload: movie });
      }
    }
  };
  const deleteMovieFromList = (movie) => {
    if (movie.type === "watchlist") {
      dispatch({ type: "DELETE_MOVIE_FROM_WATCHLIST", payload: movie });
    } else {
      dispatch({ type: "DELETE_MOVIE_FROM_WATCHEDLIST", payload: movie });
    }
    // console.log("movieForDelete", movie);
  };
  const sortList = (sortType, listType) => {
    console.log("sortType", sortType);
    console.log("listType", listType);
    // if(sortType == 'watchlist') {

    // }

    if (listType === "watchlist") {
      if (sortType === "asc") {
        return dispatch({ type: "SORT_ASC_WATCHLIST", payload: "" });
      } else return dispatch({ type: "SORT_DESC_WATCHLIST", payload: "" });
    } else if (listType === "watched") {
      if (sortType === "asc") {
        return dispatch({ type: "SORT_ASC_WATCHEDLIST", payload: "" });
      } else return dispatch({ type: "SORT_DESC_WATCHEDLIST", payload: "" });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        addMovieToList,
        deleteMovieFromList,
        sortList,
        watchlist: state.watchlist,
        watchedlist: state.watchedlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
